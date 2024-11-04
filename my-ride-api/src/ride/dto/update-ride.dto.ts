import { ApiProperty } from '@nestjs/swagger';
import { RideStatus } from 'src/entities/ride.entity';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';

export class UpdateRideDto {
  @ApiProperty({ description: 'Start location of the ride', required: false })
  startLocation?: CreateLocationDto; // Optional for updates

  @ApiProperty({ description: 'End location of the ride', required: false })
  endLocation?: CreateLocationDto; // Optional for updates

  @ApiProperty({
    example: '2024-10-01',
    description: 'Date of the ride in YYYY-MM-DD format',
    required: false,
  })
  rideDate?: Date; // Optional for updates

  @ApiProperty({
    example: '15:30:00',
    description: 'Time of the ride in HH:mm:ss format',
    required: false,
  })
  rideTime?: string; // Optional for updates

  @ApiProperty({ example: 4, description: 'Number of available seats', required: false })
  availableSeats?: number; // Optional for updates

  @ApiProperty({ example: 25.5, description: 'Price per seat for the ride', required: false })
  pricePerSeat?: number; // Optional for updates

  @ApiProperty({ example: 1, description: 'Driver ID (Rider)', required: false })
  driverId?: number; // Optional for updates

  @ApiProperty({ example: 2, description: 'Car ID', required: false })
  carId?: number; // Optional for updates

  @ApiProperty({ enum: RideStatus, description: 'Status of the ride', required: false })
  status?: RideStatus; // Optional for updates
}
