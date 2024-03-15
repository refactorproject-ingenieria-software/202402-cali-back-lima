const validateCreditCard = (creditCardNumber: string) => {
  if (creditCardNumber.length >= 16) {
    return { isValid: true };
  }
};

export default validateCreditCard;
