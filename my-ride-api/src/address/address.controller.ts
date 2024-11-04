import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@ApiTags('addresses') // Grouping in Swagger
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  // Get all addresses
  @Get()
  @ApiOperation({ summary: 'Get all addresses' })
  findAll() {
    return this.addressService.findAll();
  }

  // Get address by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get an address by ID' })
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  // Create a new address
  @Post()
  @ApiOperation({ summary: 'Create a new address' })
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  // Update an existing address by ID
  @Put(':id')
  @ApiOperation({ summary: 'Update an address by ID' })
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  // Delete an address by ID
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an address by ID' })
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}
