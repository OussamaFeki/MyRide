# myRideApi

myRideApi is a ride-sharing platform API built using NestJS and MySQL. The system enables users to register as riders or customers, book rides, manage cars, and handle verifications. It supports location-based ride creation and booking with additional features such as user ratings, messaging, and document verification.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Requirements
- **Node.js** (v16.x or higher)
- **MySQL** (v8.x or higher)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/myRideApi.git
   cd myRideApi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Create a MySQL database:**
   ```sql
   CREATE DATABASE myRide;
   ```

2. **Set environment variables:**
   Create a `.env` file in the root directory:
   ```env
   BASE_URL=http://localhost:3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=new_user
   DB_PASSWORD=password
   DB_NAME=myRide
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   npm run start:dev
   ```

2. The application will run at `http://localhost:3000`.

3. Access Swagger documentation at `http://localhost:3000/api`.

## Database Schema

### User
- `id`: Unique identifier
- `name`: Full name
- `email`: Email address
- `encryptedPassword`: Hashed password
- `phoneNumber`: Contact number
- `profilePictureUrl`: URL to profile picture
- `userType`: Role (RIDER, CUSTOMER, ADMIN)
- `address`: Related address

### Address
- `street`: Street address
- `city`: City name
- `state`: State/Province
- `zipCode`: Postal code
- `country`: Country name

### Rider
- `licenseCard`: Driver’s license verification

### Customer
- `cinCard`: National ID card verification

### Car
- `id`: Unique identifier
- `licensePlate`: Car’s license plate
- `make`: Car make
- `model`: Car model
- `year`: Year of manufacture
- `capacity`: Number of seats
- `owner`: Rider who owns the car

### Ride
- `id`: Ride identifier
- `startLocation`: Starting point (Location entity)
- `endLocation`: Ending point (Location entity)
- `rideDate`: Date of the ride
- `rideTime`: Time of the ride
- `availableSeats`: Number of seats available
- `pricePerSeat`: Fare per seat
- `driver`: Rider providing the ride
- `car`: Car used for the ride

### Booking
- `id`: Booking identifier
- `ride`: Associated ride
- `passenger`: Customer booking the ride
- `seatCount`: Number of seats booked
- `totalPrice`: Total booking price
- `status`: Booking status (PENDING, CONFIRMED, CANCELLED)

### Rating
- `id`: Rating identifier
- `ride`: Ride being rated
- `rater`: User providing the rating
- `ratee`: User receiving the rating
- `score`: Rating score (1-5)
- `comment`: Additional comments
- `ratingDate`: Date of rating

### Message
- `id`: Message identifier
- `sender`: User sending the message
- `receiver`: User receiving the message
- `content`: Message content
- `timestamp`: Time of the message
- `status`: Message status (SENT, READ)

### Verification
- `id`: Verification identifier
- `documentNumber`: Verification document number
- `documentImageUrl`: URL to document image
- `selfieWithDocumentUrl`: URL to selfie with document
- `verificationStatus`: Status of verification (EN_ATTENTE, VERIFIED, APPROUVE, REJECTED)
- `verificationDate`: Date of verification
- `verifiedBy`: Person who verified the document

### Location
- `latitude`: Latitude coordinate
- `longitude`: Longitude coordinate
- `fullAddress`: Full address string

### Enums
- **UserType**: RIDER, CUSTOMER, ADMIN
- **BookingStatus**: PENDING, CONFIRMED, CANCELLED
- **MessageStatus**: SENT, READ
- **VerificationStatus**: EN_ATTENTE, VERIFIED, APPROUVE, REJECTED

## Features
- **User Management**: Create and manage users as riders, customers, or admins.
- **Rider and Customer Management**: Manage riders and customers, including document verifications.
- **Car Management**: Riders can add and manage their cars.
- **Ride Creation and Booking**: Riders can create rides, and customers can book seats.
- **Booking System**: Manage ride bookings and monitor booking statuses.
- **Messaging**: Users can send and receive messages.
- **Ratings**: Customers and riders can rate each other after a ride.
- **Location Management**: Track and manage ride locations.

## API Endpoints

- **User Management**
  - `GET /users`: Retrieve a list of all users.
  - `GET /users/:id`: Retrieve a specific user by ID.
  - `POST /users`: Create a new user.
  - `DELETE /users/:id`: Delete a user by ID.

- **Rider Management**
  - `POST /riders`: Register a new rider.
  - `GET /riders/:id`: Retrieve rider details.
  
- **Car Management**
  - `POST /cars`: Add a car.
  - `GET /cars`: Get a list of cars.
  - `GET /cars/:id`: Retrieve details of a specific car.

- **Ride Management**
  - `POST /rides`: Create a ride.
  - `GET /rides`: Get a list of available rides.
  - `GET /rides/:id`: Get ride details.
  
- **Booking Management**
  - `POST /bookings`: Book a ride.
  - `GET /bookings`: List all bookings.
  - `GET /bookings/:id`: Retrieve booking details.
  - `DELETE /bookings/:id`: Cancel a booking.

- **Rating**
  - `POST /ratings`: Submit a rating.
  - `GET /ratings`: Retrieve ratings.

- **Messaging**
  - `POST /messages`: Send a message.
  - `GET /messages`: Retrieve messages.

## License

This project is licensed under the MIT License.
