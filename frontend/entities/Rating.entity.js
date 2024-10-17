const RatingType = {
    CustomerToRider: 'CustomerToRider',
    RiderToCustomer: 'RiderToCustomer',
  };
  
  class Rating {
    constructor(id, score, comments, customer, rider, ride, type, createdAt) {
      this.id = id;
      this.score = score;
      this.comments = comments;
      this.customer = customer;
      this.rider = rider;
      this.ride = ride;
      this.type = type;
      this.createdAt = createdAt;
    }
  }
  
  export { Rating, RatingType };