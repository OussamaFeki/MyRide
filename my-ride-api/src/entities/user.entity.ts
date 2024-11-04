import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Address } from './address.entity';
import { Image } from './image.entity';
import { Message } from './message.entity';

export enum UserType {
  CUSTOMER = 'CUSTOMER',
  RIDER = 'RIDER',
}

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'userType' } })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  encryptedPassword: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ default: 'CUSTOMER' })
  userType: UserType;

  @OneToOne(() => Address, { cascade: true, nullable: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Message, (message) => message.sender, { cascade: ['remove'] })
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver, { cascade: ['remove'] })
  receivedMessages: Message[];

  @OneToMany(() => Image, (image) => image.user, { cascade: true }) // Cascade on save
  images: Image[];
}
