export interface ErrorsStructure {
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

const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split('/').map(Number);
  const expiry = new Date(year + 2000, month);
  const now = new Date();

  return now < expiry;
};

const validateCreditCard = (creditCardNumber: string, expiryDate: string) => {
  const errors: ErrorsStructure = {};
  const isLuhnValid = validateLuhnsAlgorithm(creditCardNumber);
  const isExpiryDateValid = validateExpiryDate(expiryDate);

  if (creditCardNumber.length < 16) {
    errors.lengthError = 'The card must have at least 16 digits';
  }

  if (!isLuhnValid) {
    errors.luhnsError = 'The card is not valid according to the Luhn algorithm';
  }

  if (!isExpiryDateValid) {
    errors.expiryDateError = 'The card must have a valid expiration date';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};

export default validateCreditCard;
