import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingService } from 'src/booking/booking.service';
import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
import { Ride, RideStatus } from '../entities/ride.entity';
import { LocationService } from '../location/location.service';
import { RiderService } from '../rider/rider.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    private locationService: LocationService,
    private riderService: RiderService,
    private carService: CarService,
    private bookingService: BookingService,

  ) {}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const driver = await this.riderService.findOne(createRideDto.driverId);
    const car = await this.carService.findOne(createRideDto.carId);

    const startLocation = await this.locationService.create(createRideDto.startLocation);
    const endLocation = await this.locationService.create(createRideDto.endLocation);

    const ride = this.rideRepository.create({
      ...createRideDto,
      driver,
      car,
      startLocation,
      endLocation,
      status: RideStatus.ACTIVE, // Set default status
    });

    return this.rideRepository.save(ride);
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find({ relations: ['driver', 'car', 'startLocation', 'endLocation'] });
  }

  async findOne(id: number): Promise<Ride> {
    const ride = await this.rideRepository.findOne({
      where: { id },
      relations: ['driver', 'car', 'startLocation', 'endLocation'],
    });

    if (!ride) {
      throw new NotFoundException(`Ride with ID ${id} not found`);
    }
    return ride;
  }

  async update(id: number, updateRideDto: UpdateRideDto): Promise<Ride> {
    const ride = await this.findOne(id); // Check if the ride exists

    // Update only the fields that are provided
    Object.assign(ride, updateRideDto);
    return this.rideRepository.save(ride);
  }

  async remove(id: number): Promise<void> {
    try {
        // Delete related bookings first
        await this.bookingService.removeByRideId(id); // Implement this method to delete bookings by ride ID

        const result = await this.rideRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Ride with ID ${id} not found`);
        }
    } catch (error) {
        console.error('Error deleting ride:', error);
        throw new InternalServerErrorException('Error deleting ride');
    }
}

  
  

  async findByStatus(status: RideStatus): Promise<Ride[]> {
    return this.rideRepository.find({
      where: { status },
      relations: ['driver', 'car', 'startLocation', 'endLocation'],
    });
  }
}
