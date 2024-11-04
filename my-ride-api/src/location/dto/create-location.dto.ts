import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({ example: 40.712776, description: 'Latitude of the location' })
  latitude: number;

  @ApiProperty({ example: -74.005974, description: 'Longitude of the location' })
  longitude: number;

  @ApiProperty({ example: 'New York, NY, USA', description: 'Full address of the location' })
  fullAddress: string;
}
