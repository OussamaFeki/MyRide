import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ImageType } from 'src/entities/image.entity';
import { Rating } from 'src/entities/rating.entity';
import { CreateImageDto } from 'src/image/dto/create-image.dto';
import { ImageService } from 'src/image/image.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    private imageService: ImageService, // Inject ImageService
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['address', 'sentMessages', 'receivedMessages', 'images', 'cinVerification', 'licenseVerification'],
    });
  }

  // Create user method updated to handle images
  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    const newUser = this.userRepository.create({
      ...createUserDto,
      encryptedPassword: hashedPassword,
    });

    const savedUser = await this.userRepository.save(newUser);

    // Handle images if provided
    try {
      if (createUserDto.images && createUserDto.images.length > 0) {
        const createdImages = await Promise.all(createUserDto.images.map(async (imageDto: CreateImageDto) => {
          imageDto.imageType = ImageType.PROFILE; // Set image type if necessary
          const createdImage = await this.imageService.createImage(imageDto, imageDto.url, savedUser.id);
          return createdImage;
        }));

        // Set the last uploaded image as the profile picture
        if (createdImages.length > 0) {
          const lastImage = createdImages[createdImages.length - 1];
          savedUser.profilePictureUrl = lastImage.url; // Assuming `url` is the property of the Image entity
          await this.userRepository.save(savedUser); // Save the updated user with the new profile picture URL
        }
      }
    } catch (error) {
      console.error('Error saving images for user:', error);
      throw new InternalServerErrorException('Failed to save images for user');
    }

    return savedUser;
  }

  

  async login(loginUserDto: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    console.log('User found:', user);
    console.log('Input password:', loginUserDto.password);
    console.log('Stored hashed password:', user.encryptedPassword);
  
    const isMatch = await bcrypt.compare(loginUserDto.password, user.encryptedPassword);
    if (!isMatch) {
      console.log('Password does not match');
      throw new UnauthorizedException('Invalid credentials');
    }
  
    console.log('Password matched');
    return user;
  }
  
  async remove(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Delete all ratings related to this user
    await this.ratingRepository.delete({ rider: { id }, customer: { id } });

    // Proceed to delete the user
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
  
}