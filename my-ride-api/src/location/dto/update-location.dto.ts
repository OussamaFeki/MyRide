import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocationDto {
  @ApiProperty({ example: 40.712776, description: 'Latitude of the location', required: false })
  latitude?: number;

  @ApiProperty({ example: -74.005974, description: 'Longitude of the location', required: false })
  longitude?: number;

  @ApiProperty({ example: 'New York, NY, USA', description: 'Full address of the location', required: false })
  fullAddress?: string;
}
