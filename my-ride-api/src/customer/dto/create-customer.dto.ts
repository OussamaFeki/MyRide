import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateVerificationDto } from 'src/verification/dto/create-verification.dto';

export class CreateCustomerDto {

  @ApiProperty({ description: 'User information' })
  user: CreateUserDto;

  @ApiProperty({ example: 100, description: 'Loyalty points of the customer', required: false })
  loyaltyPoints?: number;

  @ApiProperty({ description: 'License verification details' })
  cinVerification: CreateVerificationDto; // Add verification details
}