import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserType } from 'src/entities/user.entity';
import { VerificationService } from 'src/verification/verification.service';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private userService: UserService, // Inject UserService for any common user logic
    private readonly verificationService: VerificationService, // Inject VerificationService
  ) {}

  // Create a new customer
  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    let newCustomer: Customer;

    try {
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(createCustomerDto.user.password, 10);

      // Create the customer entity
      newCustomer = this.customerRepository.create({
        ...createCustomerDto.user,
        encryptedPassword: hashedPassword,
        loyaltyPoints: createCustomerDto.loyaltyPoints,
        userType: UserType.CUSTOMER,
      });

      // Save the customer entity to the database
      newCustomer = await this.customerRepository.save(newCustomer);

      // If CIN verification details are provided, create it
      if (createCustomerDto.cinVerification) {
        const verification = await this.verificationService.create(createCustomerDto.cinVerification);

        // Optionally set visibility or other properties on the verification
        verification.documentImage.visibility = false;
        verification.selfieImage.visibility = false;

        // Link the verification with the customer
        newCustomer.cinVerification = verification;

        // Save the customer again to update the verification link
        await this.customerRepository.save(newCustomer);
      }

      return newCustomer;

    } catch (error) {
      console.error('Error creating customer:', error);
      throw new InternalServerErrorException('Failed to create customer');
    }
  }

  // Retrieve all customers
  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find({
      relations: ['cinVerification'],
    });
  }

  // Find a specific customer by ID
  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      relations: ['cinVerification'],
    });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }
}
