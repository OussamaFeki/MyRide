const BookingStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
  };
  
  class Booking {
    constructor({
      id,
      ride,
      passenger,
      seatCount,
      totalPrice,
      status = BookingStatus.PENDING,
    }) {
      this.id = id;
      this.ride = ride;
      this.passenger = passenger;
      this.seatCount = seatCount;
      this.totalPrice = totalPrice;
      this.status = status;
    }
  
    // Method to update booking status
    updateStatus(newStatus) {
      if (Object.values(BookingStatus).includes(newStatus)) {
        this.status = newStatus;
      } else {
        throw new Error('Invalid booking status');
      }
    }
  }
  
  export { Booking, BookingStatus };