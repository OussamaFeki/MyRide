import { ApiProperty } from '@nestjs/swagger';
import { RideStatus } from 'src/entities/ride.entity';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';

export class CreateRideDto {
  @ApiProperty({ description: 'Start location of the ride' })
  startLocation: CreateLocationDto;

  @ApiProperty({ description: 'End location of the ride' })
  endLocation: CreateLocationDto;

  @ApiProperty({ example: '2024-10-01', description: 'Date of the ride in YYYY-MM-DD format' })
  rideDate: Date;

  @ApiProperty({ example: '15:30:00', description: 'Time of the ride in HH:mm:ss format' })
  rideTime: string;

  @ApiProperty({ example: 4, description: 'Number of available seats' })
  availableSeats: number;

  @ApiProperty({ example: 25.5, description: 'Price per seat for the ride' })
  pricePerSeat: number;

  @ApiProperty({ example: 1, description: 'Driver ID (Rider)' })
  driverId: number;

  @ApiProperty({ example: 2, description: 'Car ID' })
  carId: number;

  @ApiProperty({ enum: RideStatus, description: 'Status of the ride' })
  status: RideStatus; // Add status property
}
