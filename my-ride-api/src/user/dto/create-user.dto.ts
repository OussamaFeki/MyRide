import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { UserType } from 'src/entities/user.entity';
import { CreateImageDto } from 'src/image/dto/create-image.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'Mokni Hamdi', description: 'The name of the user' })
  name: string;

  @ApiProperty({ example: 'hamdi@gmail.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password for the user account' })
  password: string; 

  @ApiProperty({ example: '50430778', description: 'The user\'s phone number', required: false })
  phoneNumber?: string;

  // Add userType to the DTO
  @ApiProperty({ example: 'CUSTOMER', description: 'The type of user', required: true })
  userType: UserType;
  
  // Address property in the DTO
  @ApiProperty({ type: CreateAddressDto, description: 'The address of the user', required: true })
  address: CreateAddressDto;
  
  @ApiProperty({ description: 'Array of user images', type: [CreateImageDto], required: false })
  images?: CreateImageDto[];  // Accept an array of images

}