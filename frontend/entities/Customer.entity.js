class Customer extends User {
  constructor(id, name, email, encryptedPassword, loyaltyPoints, ratings = []) {
    super({
      id,
      name,
      email,
      encryptedPassword,
      userType: 'CUSTOMER',
    });
    this.loyaltyPoints = loyaltyPoints;
    this.ratings = ratings;
  }
}

export default Customer;