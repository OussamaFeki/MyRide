// Image.js

// Enum for image types
const ImageType = {
    PROFILE: 'PROFILE',
    DOCUMENT: 'DOCUMENT',
    CAR: 'CAR',
  };
  
  // Image class
  class Image {
    constructor({
      id,
      url,
      uploadedAt = new Date(),
      updatedAt = new Date(),
      visibility = true,
      imageType = ImageType.CAR,
      idReference = null,
      car = null,
      user = null,
    }) {
      this.id = id;
      this.url = url; // URL or file path for the image
      this.uploadedAt = uploadedAt;
      this.updatedAt = updatedAt;
      this.visibility = visibility;
      this.imageType = imageType;
      this.idReference = idReference; // Reference ID for associated entity
      this.car = car; // Reference to a Car instance (if applicable)
      this.user = user; // Reference to a User instance (if applicable)
    }
  
    // Method to update visibility
    setVisibility(isVisible) {
      this.visibility = isVisible;
      this.updatedAt = new Date(); // Update the updatedAt timestamp
    }
  
    // Method to change the image type
    setImageType(newType) {
      if (Object.values(ImageType).includes(newType)) {
        this.imageType = newType;
        this.updatedAt = new Date();
      } else {
        throw new Error('Invalid image type');
      }
    }
  
    // Method to update the image URL
    updateUrl(newUrl) {
      this.url = newUrl;
      this.updatedAt = new Date();
    }
  
    // Method to update the associated entity reference
    updateReference(idReference, car = null, user = null) {
      this.idReference = idReference;
      this.car = car;
      this.user = user;
      this.updatedAt = new Date();
    }
  }
  
  export { Image, ImageType };
  