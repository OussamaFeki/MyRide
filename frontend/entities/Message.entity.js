// Message.js
import { User } from './User';

// Enum for message status
const MessageStatus = {
  SENT: 'SENT',
  RECEIVED: 'RECEIVED',
  READ: 'READ',
};

// Message class
class Message {
  constructor({
    id,
    sender,
    receiver,
    content,
    timestamp = new Date(),
    status = MessageStatus.SENT,
  }) {
    this.id = id;
    this.sender = sender; // Should be an instance of User
    this.receiver = receiver; // Should be an instance of User
    this.content = content;
    this.timestamp = timestamp;
    this.status = status;
  }

  // Method to update message status
  updateStatus(newStatus) {
    if (Object.values(MessageStatus).includes(newStatus)) {
      this.status = newStatus;
    } else {
      throw new Error('Invalid status');
    }
  }

  // Method to format the timestamp as a string
  getFormattedTimestamp() {
    return this.timestamp.toLocaleString();
  }
}

export { Message, MessageStatus };
