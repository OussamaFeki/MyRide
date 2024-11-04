    import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Ride } from './ride.entity';

    export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    }

    @Entity()
    export class Booking {
        @PrimaryGeneratedColumn('increment')
        id: number;

        @ManyToOne(() => Ride, { eager: true })
        @JoinColumn({ name: 'ride_id' })
        ride: Ride;

        @ManyToOne(() => Customer, { eager: true })
        @JoinColumn({ name: 'passenger_id' })
        passenger: Customer;

        @Column({ type: 'int' })
        seatCount: number;

        @Column({ type: 'float' })
        totalPrice: number;

        @Column({ type: 'enum', enum: BookingStatus })
        status: BookingStatus;
    }
