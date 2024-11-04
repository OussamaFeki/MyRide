import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Location } from '../entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationService } from './location.service';

@ApiTags('locations')  // For Swagger grouping
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  async create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationService.create(createLocationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location by ID' })
  async findOne(@Param('id') id: number): Promise<Location> {
    return this.locationService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a location by ID' })
  async update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto): Promise<Location> {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a location by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.locationService.remove(id);
  }
}
