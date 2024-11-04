import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './image.entity';

export enum VerificationStatus {
  EN_ATTENTE = 'EN_ATTENTE',
  VERIFIED = 'VERIFIED',
  APPROUVE = 'APPROUVE',
  REJECTED = 'REJECTED'
}

@Entity()
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  documentNumber: string;

  @OneToOne(() => Image, { cascade: true })
  @JoinColumn()
  documentImage: Image;

  @OneToOne(() => Image, { cascade: true })
  @JoinColumn()
  selfieImage: Image;

  @Column({
    type: 'enum',
    enum: VerificationStatus,
    default: VerificationStatus.EN_ATTENTE,
  })
  verificationStatus: VerificationStatus;

  @Column({ nullable: true })
  verificationDate: Date;

  @Column({ nullable: true })
  verifiedBy: string;
}
