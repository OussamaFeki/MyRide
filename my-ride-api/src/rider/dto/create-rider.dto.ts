import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateVerificationDto } from 'src/verification/dto/create-verification.dto';

export class CreateRiderDto {
  @ApiProperty({ description: 'User information' })
  user: CreateUserDto;

  @ApiProperty({ description: 'License verification details' })
  licenseVerification: CreateVerificationDto; // Add verification details
}
