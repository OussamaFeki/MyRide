import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ example: 1, description: 'Ride ID' })
  rideId: number;

  @ApiProperty({ example: 1, description: 'Customer ID' })
  passengerId: number;

  @ApiProperty({ example: 2, description: 'Number of seats booked' })
  seatCount: number;

  @ApiProperty({ example: 50.0, description: 'Total price for the booking' })
  totalPrice: number;
}