import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Car } from '../entities/car.entity';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@ApiTags('cars')  // Grouping in Swagger UI
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new car for a rider' })
  async create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a car by ID' })
  async findOne(@Param('id') id: number): Promise<Car> {
    return this.carService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a car by ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.carService.remove(id); // Assuming you implement the remove method in service
  }
}
