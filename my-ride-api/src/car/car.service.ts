import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageType } from 'src/entities/image.entity';
import { ImageService } from 'src/image/image.service';
import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { RiderService } from '../rider/rider.service';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    private riderService: RiderService,
    private imageService: ImageService,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const rider = await this.riderService.findOne(createCarDto.riderId);

    // Set image type for all images provided
    createCarDto.images?.forEach(image => {
        image.imageType = ImageType.CAR;
    });

    const car = this.carRepository.create({ ...createCarDto, rider });
    const savedCar = await this.carRepository.save(car);

    // Create images and store the URLs
    await Promise.all(createCarDto.images?.map(async (image) => {
        image.idReference = savedCar.id; // Associate image with car
        return await this.imageService.createImage(image, image.url, savedCar.id);
    }));

    return savedCar;
}


  async findAll(): Promise<Car[]> {
    return this.carRepository.find({ relations: ['images'] });
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({
        where: { id },
        relations: ['images'], // Include images relation
    });

    if (!car) {
        throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
}


  async remove(id: number): Promise<void> {
    const car = await this.findOne(id);
    await this.carRepository.remove(car);
  }
}
