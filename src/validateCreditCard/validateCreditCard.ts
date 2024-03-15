const validateCreditCard = (creditCardNumber: string) => {
  let errors;

  if (creditCardNumber.length < 16) {
    errors = { lengthError: 'The card must have at least 16 digits' };
    return { isValid: false, errors };
  }

  return { isValid: true };
};

export default validateCreditCard;
