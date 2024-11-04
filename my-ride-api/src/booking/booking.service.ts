import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { RideService } from 'src/ride/ride.service';
import { Repository } from 'typeorm';
import { Booking, BookingStatus } from '../entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
    constructor(
      @InjectRepository(Booking)
      private bookingRepository: Repository<Booking>,
      @Inject(forwardRef(() => RideService)) // Use forwardRef here
      private rideService: RideService,
      private customerService: CustomerService,
    ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { rideId, passengerId, seatCount, totalPrice } = createBookingDto;

    // Fetch ride and passenger using their respective services
    const ride = await this.rideService.findOne(rideId);
    const passenger = await this.customerService.findOne(passengerId);

    // Check if ride and passenger exist
    if (!ride || !passenger) {
        throw new Error('Ride or Passenger not found');
    }

    // Create a new booking using the ride and passenger
    const newBooking = this.bookingRepository.create({
        ride,
        passenger,
        seatCount,
        totalPrice,
        status: BookingStatus.PENDING, // Use enum directly
    });

    // Save the new booking in the database
    return this.bookingRepository.save(newBooking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find({ relations: ['ride', 'passenger'] });
  }

  // Method to accept a booking
  async acceptBooking(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOneBy({ id });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    booking.status = BookingStatus.CONFIRMED;
    return this.bookingRepository.save(booking);
  }

  // Method to refuse a booking
  async refuseBooking(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOneBy({ id });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    booking.status = BookingStatus.CANCELLED;
    return this.bookingRepository.save(booking);
  }
  
  async findByRideId(rideId: number): Promise<Booking[]> {
    return this.bookingRepository.find({
      where: { ride: { id: rideId } },
      relations: ['ride', 'passenger'],
    });
  }
  // Add these methods in BookingService

async findOne(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['ride', 'passenger'],
    });
    
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  
    return booking;
  }
  
  async delete(id: number): Promise<void> {
    const result = await this.bookingRepository.delete(id);
    
    if (result.affected === 0) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
  
  async removeByRideId(rideId: number): Promise<void> {
    const result = await this.bookingRepository.delete({ ride: { id: rideId } });
    
    if (result.affected === 0) {
        throw new NotFoundException(`No bookings found for ride with ID ${rideId}`);
    }
}
}
