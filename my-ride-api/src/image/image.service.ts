import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { Image, ImageType } from '../entities/image.entity';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  private createDirectory(documentId: number , imageType: ImageType): string {
    const directoryPath = path.join(__dirname, '..', '..', 'uploads', imageType, documentId.toString());
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
      console.log(`Directory created at: ${directoryPath}`);
    }
    return directoryPath;
  }

  async createImage(createImageDto: CreateImageDto, filePath: string, documentId: number): Promise<Image> {
    const directoryPath = this.createDirectory(documentId, createImageDto.imageType);
    const fileName = path.basename(filePath);
    const newFilePath = path.join(directoryPath, fileName);

    try {
        fs.copyFileSync(filePath, newFilePath); // Copy the file
    } catch (error) {
        console.error(`Error copying file from ${filePath} to ${newFilePath}: ${error.message}`);
        throw new Error('Failed to copy the file');
    }

    const absolutePath = path.resolve(newFilePath);
    const newImage = this.imageRepository.create({
      ...createImageDto,
      url: absolutePath,
      ...(createImageDto.imageType === ImageType.CAR
        ? { car: { id: documentId } }
        : createImageDto.imageType === ImageType.PROFILE
        ? { user: { id: documentId } }
        : null), // Associate with Car or User
    });
    

    return this.imageRepository.save(newImage);
  }


  async findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async findOne(id: number): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id } });
    if (!image) {
      throw new NotFoundException(`Image with ID ${id} not found`);
    }
    return image;
  } 

  async getPublicImageUrl(id: number): Promise<string> {
    const image = await this.imageRepository.findOne({ where: { id } });
    if (!image) {
        throw new NotFoundException(`Image with ID ${id} not found`);
    }

    // Use path module to extract parts
    const pathParts = image.url.split(path.sep); // Use path.sep for platform compatibility
    const fileName = pathParts[pathParts.length - 1]; // Last part is the file name
    const documentId = pathParts[pathParts.length - 2]; // Second last part is the document ID

    // Construct the public URL
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const publicUrl = `${baseUrl}/uploads/DOCUMENT/${documentId}/${fileName}`;

    return publicUrl;
  }



  async deleteImage(id: number): Promise<void> {
    const image = await this.findOne(id);
    const filePath = path.join(__dirname, '..', '..', image.url); // Update this to access the correct path

    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath); // Optionally delete the file if needed in the future
    }

    await this.imageRepository.delete(id);
  }
}
