import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message, MessageStatus } from '../entities/message.entity';
import { UserService } from '../user/user.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly userService: UserService,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const sender = await this.userService.findOne(createMessageDto.senderId);
    const receiver = await this.userService.findOne(createMessageDto.receiverId);
    
    const newMessage = this.messageRepository.create({
      sender,
      receiver,
      content: createMessageDto.content,
    });
    
    return this.messageRepository.save(newMessage);
  }

  async getMessagesByUser(userId: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: [{ sender: { id: userId } }, { receiver: { id: userId } }],
    });
  }

  async markAsReceived(messageId: number): Promise<Message> {
    const message = await this.messageRepository.findOneBy({ id: messageId });
    if (!message) {
      throw new Error('Message not found');
    }

    message.status = MessageStatus.RECEIVED;
    return this.messageRepository.save(message);
  }

  async markAsRead(messageId: number): Promise<Message> {
    const message = await this.messageRepository.findOneBy({ id: messageId });
    if (!message) {
      throw new Error('Message not found');
    }

    message.status = MessageStatus.READ;
    return this.messageRepository.save(message);
  }
}
