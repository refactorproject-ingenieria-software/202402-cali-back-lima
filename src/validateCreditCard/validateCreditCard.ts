interface Errors {
  lengthError?: string;
  luhnsError?: string;
  expiryDateError?: string;
}

const validateLuhnsAlgorithm = (creditCardNumber: string): boolean => {
  let sum = 0;
  let isSecond = false;

  for (let position = creditCardNumber.length - 1; position >= 0; position--) {
    let digit = parseInt(creditCardNumber[position]);

    if (isSecond) {
      digit = digit * 2;
    }

    if (isSecond && digit > 9) {
      digit = digit - 9;
    }

    sum += digit;
    isSecond = !isSecond;
  }

  return sum % 10 === 0;
};

const validateCreditCard = (creditCardNumber: string, expiryDate: string) => {
  let errors: Errors;
  expiryDate;
  const isLuhnValid = validateLuhnsAlgorithm(creditCardNumber);

  if (creditCardNumber.length < 16) {
    errors = { lengthError: 'The card must have at least 16 digits' };
    return { isValid: false, errors };
  }

  if (!isLuhnValid) {
    errors = {
      luhnsError: 'The card is not valid according to the Luhn algorithm',
    };
    return { isValid: false, errors };
  }

  return { isValid: true };
};

export default validateCreditCard;
