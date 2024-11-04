import { ApiProperty } from '@nestjs/swagger';
import { VerificationStatus } from '../../entities/verification.entity';

export class UpdateVerificationStatusDto {
  @ApiProperty({ enum: VerificationStatus, description: 'New verification status' })
  verificationStatus: VerificationStatus;

  @ApiProperty({ description: 'Name of the person who verified this request' })
  verifiedBy: string;
}
