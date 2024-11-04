import { ApiProperty } from '@nestjs/swagger';
import { CreateImageDto } from 'src/image/dto/create-image.dto';

export class CreateCarDto {
  @ApiProperty({ example: 'Toyota', description: 'Car make' })
  make: string;

  @ApiProperty({ example: 'Corolla', description: 'Car model' })
  model: string;

  @ApiProperty({ example: 2020, description: 'Car year' })
  year: number;

  @ApiProperty({ example: 'Black', description: 'Car color', required: false })
  color?: string;

  @ApiProperty({ example: 'ABC-1234', description: 'License plate', required: false })
  licensePlate?: string;

  @ApiProperty({ example: 1, description: 'Rider ID' })
  riderId: number; 

  @ApiProperty({ description: 'Array of car images', type: [CreateImageDto], required: false })
  images?: CreateImageDto[];  // Accept an array of images
}
