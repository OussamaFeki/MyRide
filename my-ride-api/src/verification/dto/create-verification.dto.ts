import { ApiProperty } from '@nestjs/swagger';
import { CreateImageDto } from 'src/image/dto/create-image.dto';

export class CreateVerificationDto {
  @ApiProperty({ description: 'Document number being verified' })
  documentNumber: string;

  @ApiProperty({ description: 'Document image details' })
  documentImage: CreateImageDto; // Use CreateImageDto here

  @ApiProperty({ description: 'Selfie with document image details' })
  selfieImage: CreateImageDto; // Use CreateImageDto here
}
