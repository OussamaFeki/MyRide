import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ description: 'ID of the user sending the message' })
  @IsNumber()
  senderId: number;

  @ApiProperty({ description: 'ID of the user receiving the message' })
  @IsNumber()
  receiverId: number;

  @ApiProperty({ description: 'Content of the message' })
  @IsString()
  @IsNotEmpty()
  content: string;
}
