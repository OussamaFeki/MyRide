import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Booking } from '../entities/booking.entity';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@ApiTags('bookings')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings' })
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a booking by ID' })
  async findOne(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.findOne(id);
  }

  @Get('ride/:rideId')
  @ApiOperation({ summary: 'Get bookings by ride ID' })
  async findByRideId(@Param('rideId') rideId: number): Promise<Booking[]> {
    return this.bookingService.findByRideId(rideId);
  }

  @Patch(':id/accept')
  @ApiOperation({ summary: 'Accept a booking' })
  async accept(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.acceptBooking(id);
  }

  @Patch(':id/refuse')
  @ApiOperation({ summary: 'Refuse a booking' })
  async refuse(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.refuseBooking(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a booking by ID' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.bookingService.delete(id);
  }
}
