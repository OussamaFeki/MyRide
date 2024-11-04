import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Ride, RideStatus } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { RideService } from './ride.service';

@ApiTags('rides')
@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ride' })
  async create(@Body() createRideDto: CreateRideDto): Promise<Ride> {
    return this.rideService.create(createRideDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rides' })
  async findAll(): Promise<Ride[]> {
    return this.rideService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ride by ID' })
  async findOne(@Param('id') id: number): Promise<Ride> {
    return this.rideService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a ride by ID' })
  async update(@Param('id') id: number, @Body() updateRideDto: UpdateRideDto): Promise<Ride> {
    return this.rideService.update(id, updateRideDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a ride by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.rideService.remove(id);
  }

  @Get('status/:status')
  @ApiOperation({ summary: 'Get rides by status' })
  async findByStatus(@Param('status') status: RideStatus): Promise<Ride[]> {
    return this.rideService.findByStatus(status);
  }
}
