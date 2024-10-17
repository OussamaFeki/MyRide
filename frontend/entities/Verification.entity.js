const VerificationStatus = {
    EN_ATTENTE: 'EN_ATTENTE',
    VERIFIED: 'VERIFIED',
    APPROUVE: 'APPROUVE',
    REJECTED: 'REJECTED',
  };
  
  class Verification {
    constructor({
      id,
      documentNumber,
      documentImageUrl,
      selfieWithDocumentUrl,
      verificationStatus = VerificationStatus.EN_ATTENTE,
      verificationDate = null,
      verifiedBy = null,
    }) {
      this.id = id;
      this.documentNumber = documentNumber;
      this.documentImageUrl = documentImageUrl;
      this.selfieWithDocumentUrl = selfieWithDocumentUrl;
      this.verificationStatus = verificationStatus;
      this.verificationDate = verificationDate;
      this.verifiedBy = verifiedBy;
    }
  
    // Method to update verification status
    updateVerificationStatus(newStatus) {
      if (Object.values(VerificationStatus).includes(newStatus)) {
        this.verificationStatus = newStatus;
      } else {
        throw new Error('Invalid verification status');
      }
    }
  
    // Method to update verification date
    updateVerificationDate(date) {
      this.verificationDate = date;
    }
  
    // Method to update verified by
    updateVerifiedBy(by) {
      this.verifiedBy = by;
    }
  }
  
  export { Verification, VerificationStatus };