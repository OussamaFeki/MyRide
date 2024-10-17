class User {
    constructor({
      id,
      name,
      email,
      encryptedPassword,
      phoneNumber = null,
      profilePictureUrl = null,
      userType = 'CUSTOMER',
      address = null,
      sentMessages = [],
      receivedMessages = [],
      images = [],
    }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.encryptedPassword = encryptedPassword;
      this.phoneNumber = phoneNumber;
      this.profilePictureUrl = profilePictureUrl;
      this.userType = userType;
      this.address = address;
      this.sentMessages = sentMessages;
      this.receivedMessages = receivedMessages;
      this.images = images;
    }
  
    // Method to hash password before setting it
    async hashPassword() {
      this.encryptedPassword = await bcrypt.hash(this.encryptedPassword, 10);
    }
  
    // Method to check if password is valid
    async validatePassword(password) {
      return await bcrypt.compare(password, this.encryptedPassword);
    }
  
    // Method to add a sent message
    addSentMessage(message) {
      this.sentMessages.push(message);
    }
  
    // Method to add a received message
    addReceivedMessage(message) {
      this.receivedMessages.push(message);
    }
  
    // Method to add an image
    addImage(image) {
      this.images.push(image);
    }
  
    // Method to set the address
    setAddress(address) {
      this.address = address;
    }
  }
  export{User}