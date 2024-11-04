import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';

@ApiTags('users')  // Groups endpoints in Swagger UI
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })  // Swagger description
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single user by ID' })  // Swagger description
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })  // Swagger description
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in a user' })  // Swagger description
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })  // Swagger description
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}