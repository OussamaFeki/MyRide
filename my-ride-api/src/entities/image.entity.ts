import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Car } from './car.entity';
import { User } from './user.entity';

export enum ImageType {
  PROFILE = 'PROFILE',
  DOCUMENT = 'DOCUMENT',
  CAR = 'CAR',
}

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string; // Stores the file path or URL of the uploaded image

  @CreateDateColumn()
  uploadedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: true })
  visibility: boolean;

  @Column({
    type: 'enum',
    enum: ImageType,
    default: ImageType.CAR,
  })
  imageType: ImageType;

  // Stores the ID of the entity being referenced (e.g., Car or User)
  @Column({ nullable: true })
  idReference: number;

  @ManyToOne(() => Car, car => car.images, { onDelete: 'CASCADE', nullable: true }) // Set up cascade on delete
  car: Car;

  @ManyToOne(() => User, user => user.images, { onDelete: 'CASCADE', nullable: true  }) // Set up cascade on delete
  user: User;
}
