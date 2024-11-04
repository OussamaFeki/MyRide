import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  // Create a new location
  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(location);
  }

  // Find a single location by ID
  async findOne(id: number): Promise<Location> {
    const location = await this.locationRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  // Retrieve all locations
  async findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  // Update a location by ID
  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.findOne(id); // Using the findOne method to check if the location exists
    Object.assign(location, updateLocationDto); // Merging update DTO into the existing location entity
    return this.locationRepository.save(location);
  }

  // Delete a location by ID
  async remove(id: number): Promise<void> {
    const location = await this.findOne(id); // Reusing findOne method to ensure the location exists
    await this.locationRepository.remove(location);
  }
}
