import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';
import { Location } from './location.entity';
import { Rating } from './rating.entity';
import { Rider } from './rider.entity';

export enum RideStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity()
export class Ride {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Location, { cascade: true })
  @JoinColumn({ name: 'start_location_id' })
  startLocation: Location;

  @ManyToOne(() => Location, { cascade: true })
  @JoinColumn({ name: 'end_location_id' })
  endLocation: Location;

  @Column({ type: 'date' })
  rideDate: Date;

  @Column({ type: 'time' })
  rideTime: string;

  @Column({ type: 'int' })
  availableSeats: number;

  @Column({ type: 'float' })
  pricePerSeat: number;

  @ManyToOne(() => Rider)
  @JoinColumn({ name: 'driver_id' })
  driver: Rider;

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @Column({
    type: 'enum',
    enum: RideStatus,
    default: RideStatus.ACTIVE,
  })
  status: RideStatus;
  
  @OneToMany(() => Rating, (rating) => rating.ride)
  ratings: Rating[];
}
