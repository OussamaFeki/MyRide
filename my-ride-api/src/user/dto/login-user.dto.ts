import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'hamdi@gmail.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password for the user account' })
  password: string; // The plain password to be validated
}