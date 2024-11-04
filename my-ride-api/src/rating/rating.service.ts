
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { Rating, RatingType } from '../entities/rating.entity';
import { Ride } from '../entities/ride.entity';
import { Rider } from '../entities/rider.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Rider)
    private readonly riderRepository: Repository<Rider>,
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
  ) {}

  async create(createRatingDto: CreateRatingDto): Promise<Rating> {
    const { score, comments, rideId, raterId, ratedId, type } = createRatingDto;

    // Find the ride
    const ride = await this.rideRepository.findOne({ where: { id: rideId } });
    if (!ride) {
        throw new NotFoundException(`Ride with ID ${rideId} not found`);
    }

    // Check for existing ratings
    let existingRating=null
    if(createRatingDto.type== RatingType.CustomerToRider){
        existingRating = await this.ratingRepository.findOne({
            where: {
                ride: { id: rideId }, 
                type : RatingType.CustomerToRider,
                customer: { id: raterId }, rider: { id: ratedId } ,
            },
        });
    }else{
        if(createRatingDto.type== RatingType.RiderToCustomer){
            existingRating = await this.ratingRepository.findOne({
                where: {
                    ride: { id: rideId },
                    type : RatingType.RiderToCustomer,
                    rider: { id: raterId }, customer: { id: ratedId } ,
                },
            });
        }
    }

    // If an existing rating is found, throw an exception
    if (existingRating) {
        throw new NotFoundException(`Rating for this ride by this rater already exists in direction ${type}`);
    }

    // Create new rating
    const rating = new Rating();
    rating.score = score;
    rating.comments = comments;
    rating.ride = ride;
    rating.type = type;

    // Find customer and rider based on rating type
    if (type === RatingType.CustomerToRider) {
        const customer = await this.customerRepository.findOne({ where: { id: raterId } });
        const rider = await this.riderRepository.findOne({ where: { id: ratedId } });
        if (!customer || !rider) {
            throw new NotFoundException(`Customer or Rider not found`);
        }
        rating.customer = customer;
        rating.rider = rider;
    } else if (type === RatingType.RiderToCustomer) {
        const rider = await this.riderRepository.findOne({ where: { id: raterId } });
        const customer = await this.customerRepository.findOne({ where: { id: ratedId } });
        if (!rider || !customer) {
            throw new NotFoundException(`Rider or Customer not found`);
        }
        rating.rider = rider;
        rating.customer = customer;
    }

    return this.ratingRepository.save(rating);
}


  async findAll(page = 1, limit = 10): Promise<Rating[]> {
    return this.ratingRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }
}
