import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.createMessage(createMessageDto);
  }

  @Get(':userId')
  async getUserMessages(@Param('userId') userId: number): Promise<Message[]> {
    return this.messageService.getMessagesByUser(userId);
  }

  @Put(':id/received')
  @ApiResponse({ status: 200, description: 'Message marked as received' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  async markMessageAsReceived(@Param('id') id: number): Promise<Message> {
    return this.messageService.markAsReceived(id);
  }

  @Put(':id/read')
  @ApiResponse({ status: 200, description: 'Message marked as read' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  async markMessageAsRead(@Param('id') id: number): Promise<Message> {
    return this.messageService.markAsRead(id);
  }
}
