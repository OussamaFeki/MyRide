class Car {
    constructor({
      id,
      make,
      model,
      year,
      color,
      rider,
      images = [],
    }) {
      this.id = id;
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.rider = rider;
      this.images = images;
    }
  }
  
  export default Car;