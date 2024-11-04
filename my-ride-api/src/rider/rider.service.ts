import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ImageType } from 'src/entities/image.entity';
import { UserType } from 'src/entities/user.entity';
import { VerificationService } from 'src/verification/verification.service';
import { Repository } from 'typeorm';
import { Rider } from '../entities/rider.entity';
import { CreateRiderDto } from './dto/create-rider.dto';

@Injectable()
export class RiderService {
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
    private readonly verificationService: VerificationService,
  ) {}

  // Create a new rider
  async createRider(createRiderDto: CreateRiderDto): Promise<Rider> {
    let newRider: Rider;

    try {
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(createRiderDto.user.password, 10);

      // Create the rider entity first
      newRider = this.riderRepository.create({
        ...createRiderDto.user,
        encryptedPassword: hashedPassword,
        userType: UserType.RIDER,
      });

      // Save the rider entity to the database
      newRider = await this.riderRepository.save(newRider);

      // If a license verification is provided, create it
      if (createRiderDto.licenseVerification) {
        const verification = await this.verificationService.create(createRiderDto.licenseVerification);
        
        verification.documentImage.visibility = false;
        verification.selfieImage.visibility = false;
        verification.selfieImage.imageType = ImageType.DOCUMENT;
        verification.selfieImage.imageType = ImageType.DOCUMENT;

        // If verification was created successfully, link it with the rider
        newRider.licenseVerification = verification;

        // Save the rider again to update the verification link
        await this.riderRepository.save(newRider);
      }
      
      return newRider;

    } catch (error) {
      console.error('Error creating rider:', error);
      throw new InternalServerErrorException('Failed to create rider');
    }
  }

  // Find all riders
  async findAll(): Promise<Rider[]> {
    return this.riderRepository.find({
      relations: ['licenseVerification'], // Include related verification
    });
  }

  // Find a specific rider by ID
  async findOne(id: number): Promise<Rider> {
    const rider = await this.riderRepository.findOne({
      where: { id },
      relations: ['licenseVerification'],
    });

    if (!rider) {
      throw new NotFoundException(`Rider with ID ${id} not found`);
    }

    return rider;
  }
}
