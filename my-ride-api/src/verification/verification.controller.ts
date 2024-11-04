import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Verification } from '../entities/verification.entity';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationStatusDto } from './dto/update-verification.dto';
import { VerificationService } from './verification.service';

@ApiTags('verifications')
@Controller('verifications')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a new verification request' })
  async createVerification(@Body() createVerificationDto: CreateVerificationDto): Promise<Verification> {
    return this.verificationService.create(createVerificationDto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update the verification status' })
  async updateVerificationStatus(
    @Param('id') id: number,
    @Body() updateStatusDto: UpdateVerificationStatusDto,
  ): Promise<Verification> {
    return this.verificationService.updateStatus(id, updateStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all verification requests' })
  async findAll(): Promise<Verification[]> {
    return this.verificationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a verification request by ID' })
  async findOne(@Param('id') id: number): Promise<Verification> {
    return this.verificationService.findOne(id);
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a verification request' })
  async deleteVerification(@Param('id') id: number): Promise<void> {
    return this.verificationService.delete(id);
  }
}
