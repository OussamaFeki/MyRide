import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ example: '123 Main St', description: 'The street of the address' })
  street: string;

  @ApiProperty({ example: 'New York', description: 'The city of the address' })
  city: string;

  @ApiProperty({ example: 'NY', description: 'The state of the address' })
  state: string;

  @ApiProperty({ example: '10001', description: 'The zip code of the address' })
  zipCode: string;

  @ApiProperty({ example: 'USA', description: 'The country of the address' })
  country: string;
}
