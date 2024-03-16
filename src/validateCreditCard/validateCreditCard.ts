export interface ErrorsStructure {
  lengthError?: string;
  luhnsError?: string;
  expiryDateError?: string;
}

const doubleDigitsAccordingLuhnsAlgorithm = (number: string): number[] => {
  const creditCardNumbers: number[] = [];
  const reverseNumbers: string[] = number.split('').reverse();

  for (let position = 0; position < reverseNumbers.length; position += 1) {
    let digit = +reverseNumbers[position];

    if (position % 2 === 1) {
      digit *= 2;
    }

    creditCardNumbers.push(digit);
  }

  return creditCardNumbers;
};

const reduceDoubleDigitsAccordingLuhnsAlgorithm = (numbers: number[]) => {
  const doubleThreshold = 9;

  numbers.forEach((number, position) => {
    if (number > doubleThreshold) {
      return (numbers[position] -= doubleThreshold);
    }
    return number;
  });
};

const validateLuhnsAlgorithm = (creditCardNumber: string): boolean => {
  const luhnsModul = 10;

  const processedCreditCardNumbers =
    doubleDigitsAccordingLuhnsAlgorithm(creditCardNumber);

  reduceDoubleDigitsAccordingLuhnsAlgorithm(processedCreditCardNumbers);

  const sumCreditCardNumber = processedCreditCardNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return sumCreditCardNumber % luhnsModul === 0;
};

const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split('/').map(Number);
  const absoluteYearValue = 2000;
  const expiry = new Date(year + absoluteYearValue, month);
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
