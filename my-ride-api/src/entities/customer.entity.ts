import { ChildEntity, Column, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Rating } from './rating.entity';
import { User } from './user.entity';
import { Verification } from './verification.entity';

@ChildEntity()
export class Customer extends User {

  @Column({ nullable: true })
  loyaltyPoints: number;
  
  @OneToMany(() => Rating, (rating) => rating.customer)
  ratings: Rating[];
  
  // Relate verification with the customer's CIN
  @OneToOne(() => Verification, { cascade: true, nullable: true })
  @JoinColumn()
  cinVerification: Verification;
}
