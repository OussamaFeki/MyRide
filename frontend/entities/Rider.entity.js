class Rider extends User {
    constructor(id, name, email, encryptedPassword, ratings = []) {
      super({
        id,
        name,
        email,
        encryptedPassword,
        userType: 'RIDER',
      });
      this.ratings = ratings;
    }
  }
  
  export default Rider;