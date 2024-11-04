import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './image.entity';
import { Rider } from './rider.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  color: string;

  @ManyToOne(() => Rider, (rider) => rider.cars, { onDelete: 'CASCADE' })  // A rider can have multiple cars
  rider: Rider;

  @OneToMany(() => Image, (image) => image.car, { cascade: true }) // Cascade on save
  images: Image[];
  
}
