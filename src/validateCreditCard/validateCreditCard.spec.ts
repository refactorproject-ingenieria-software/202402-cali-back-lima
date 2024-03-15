import validateCreditCard from './validateCreditCard';

describe('Given a validateCreditCard function', () => {
  test('It should be defined', () => {
    expect(validateCreditCard).toBeDefined();
  });

  describe('When it receives a credit card number with 16 digits', () => {
    test('Then it should return that the credit card is valid', () => {
      const creditCardNumber = '1789372997456783';

      const expectedResult = { isValid: true };

      expect(validateCreditCard(creditCardNumber)).toStrictEqual(
        expectedResult,
      );
    });
  });

  describe('When it receives a credit card number with less than 16 digits', () => {
    test('Then it should return that the credit card is invalid and an error message', () => {
      const creditCardNumber = '123';
      const errorMessages = 'The card must have at least 16 digits';

      const expectedResult = {
        isValid: false,
        errors: { lengthError: errorMessages },
      };

      expect(validateCreditCard(creditCardNumber)).toStrictEqual(
        expectedResult,
      );
    });
  });

  describe('When it receives a credit card number that is not valid according to the Luhn algorithm', () => {
    test('Then it should return that the credit card is not valid according to the Luhn algorithm', () => {
      const nonValidCreditCardNumber = '8910423685127395';
      const errorMessage =
        'The card is not valid according to the Luhn algorithm';

      const expectedResult = {
        isValid: false,
        errors: { lengthError: errorMessage },
      };

      expect(validateCreditCard(nonValidCreditCardNumber)).toStrictEqual(
        expectedResult,
      );
    });
  });
});
