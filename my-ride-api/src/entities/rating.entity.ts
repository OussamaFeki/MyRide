import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Ride } from './ride.entity';
import { Rider } from './rider.entity';

export enum RatingType {
  CustomerToRider = 'CustomerToRider',
  RiderToCustomer = 'RiderToCustomer',
}
@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  score: number;

  @Column({ nullable: true })
  comments: string;

  @ManyToOne(() => Customer, (customer) => customer.ratings, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  
  @ManyToOne(() => Rider, (rider) => rider.ratings, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rider_id' })
  rider: Rider;
  

  @ManyToOne(() => Ride, (ride) => ride.ratings)
  @JoinColumn({ name: 'ride_id' })
  ride: Ride;

  @Column({
    type: 'enum',
    enum: RatingType,
  })
  type: RatingType;

  @CreateDateColumn()
  createdAt: Date;
}
