import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as FormData from 'form-data';
import * as fs from 'fs';
import { ImageService } from 'src/image/image.service';
import { Repository } from 'typeorm';
import { Verification, VerificationStatus } from '../entities/verification.entity';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationStatusDto } from './dto/update-verification.dto';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private verificationRepository: Repository<Verification>,
    private imageService: ImageService,
  ) {}

  async create(createVerificationDto: CreateVerificationDto): Promise<Verification> {
    const verification = this.verificationRepository.create(createVerificationDto);
    const savedVerification = await this.verificationRepository.save(verification);

    console.log(`Verification created with ID: ${savedVerification.id}`);

    try {
      const documentId = savedVerification.id;
      const documentImage = await this.imageService.createImage(createVerificationDto.documentImage, createVerificationDto.documentImage.url, documentId);
      const selfieImage = await this.imageService.createImage(createVerificationDto.selfieImage, createVerificationDto.selfieImage.url, documentId);

      // Set the image URLs correctly
      savedVerification.documentImage = documentImage; // assuming documentImage is a relation
      savedVerification.selfieImage = selfieImage; // assuming selfieImage is a relation

      await this.verificationRepository.save(savedVerification);

      // Trigger background verification after successful creation
      setImmediate(() => {
        console.log(`Triggering verification for ID: ${savedVerification.id}`);
        this.verifyImages(savedVerification.id);
      });

    } catch (error) {
      console.error('Error saving images:', error);
      throw new InternalServerErrorException('Failed to save images for verification');
    }

    return savedVerification;
  }

  async findAll(): Promise<Verification[]> {
    return this.verificationRepository.find({ relations: ['documentImage', 'selfieImage'] }); // Adjusted relations
  }

  async findOne(id: number): Promise<Verification> {
    const verification = await this.verificationRepository.findOne({
      where: { id },
      relations: ['documentImage', 'selfieImage'], // Adjusted relations
    });

    if (!verification) {
      throw new NotFoundException(`Verification with ID ${id} not found`);
    }

    return verification;
  }

  async delete(id: number): Promise<void> {
    const result = await this.verificationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Verification with ID ${id} not found`);
    }
  }

  async updateStatus(id: number, updateStatusDto: UpdateVerificationStatusDto): Promise<Verification> {
    const verification = await this.findOne(id);
    verification.verificationStatus = updateStatusDto.verificationStatus;
    verification.verificationDate = new Date();
    verification.verifiedBy = updateStatusDto.verifiedBy;

    return this.verificationRepository.save(verification);
  }

  async verifyImages(id: number): Promise<void> {
    try {
      const verification = await this.findOne(id);

      const documentImageUrl = verification.documentImage?.url; // Use optional chaining
      const selfieImageUrl = verification.selfieImage?.url; // Use optional chaining

      // Ensure both URLs are valid before proceeding
      if (!documentImageUrl || !selfieImageUrl) {
        throw new Error(`Image URLs are missing for Verification ID ${id}`);
      }

      // Read the image files
      const documentImage = fs.createReadStream(documentImageUrl);
      const selfieImage = fs.createReadStream(selfieImageUrl);

      // Prepare form-data for Flask API
      const formData = new FormData();
      formData.append('documentImage', documentImage);
      formData.append('selfieImage', selfieImage);

      // Send the request to Flask API for face verification
      const flaskApiUrl = 'http://127.0.0.1:5000/upload'; // Flask API URL
      const response = await axios.post(flaskApiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      // Handle Flask response
      if (response.data.message === 'Face verified successfully!') {
        // Update verification status to APPROUVE
        verification.verificationStatus = VerificationStatus.APPROUVE;
      } else {
        // Update verification status to REJECTED if not matching
        verification.verificationStatus = VerificationStatus.REJECTED;
      }
      
      verification.verifiedBy = "FaceMatch" ;
      verification.verificationDate = new Date();
      await this.verificationRepository.save(verification);

      console.log(`Verification ${id} result: ${response.data.message}`);
    } catch (error) {
      console.error(`Failed to verify images for Verification ID ${id}: ${error.message}`);
    }
  }
}
