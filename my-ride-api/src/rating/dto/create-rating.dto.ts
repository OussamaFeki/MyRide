import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';
import { RatingType } from 'src/entities/rating.entity';

export class CreateRatingDto {
  @ApiProperty({ example: 4, description: 'Rating score (0-5)' })
  @IsInt({ message: 'Score must be an integer' })
  @Min(0, { message: 'Score must be at least 0' })
  @Max(5, { message: 'Score must not exceed 5' })
  score: number;

  @ApiProperty({ example: 'Great ride!', description: 'Optional comments', required: false })
  comments?: string;

  @ApiProperty({ example: 1, description: 'Ride ID' })
  rideId: number;

  @ApiProperty({ example: 2, description: 'Rater ID (customer or rider)' })
  raterId: number;

  @ApiProperty({ example: 3, description: 'Rated ID (rider or customer)' })
  ratedId: number;

  @ApiProperty({
    enum: RatingType,
    description: 'Rating type (CustomerToRider or RiderToCustomer)',
  })
  type: RatingType;
}
