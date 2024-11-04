import { ChildEntity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Car } from './car.entity';
import { Rating } from './rating.entity';
import { User } from './user.entity';
import { Verification } from './verification.entity';

@ChildEntity()
export class Rider extends User {

  @OneToMany(() => Car, (car) => car.rider)
  cars: Car[];
  
  @OneToMany(() => Rating, (rating) => rating.rider)
  ratings: Rating[];

  // Relate verification with the rider's license plate
  @OneToOne(() => Verification, { nullable: true, cascade: true })
  @JoinColumn()
  licenseVerification: Verification;
}
