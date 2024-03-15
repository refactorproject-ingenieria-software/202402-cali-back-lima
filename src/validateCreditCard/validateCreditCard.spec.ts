import exp from 'constants';
import validateCreditCard from './validateCreditCard';

describe('Given a validateCreditCard function', () => {
  const validExpiryDate = '12/24';
  test('It should be defined', () => {
    expect(validateCreditCard).toBeDefined();
  });

  describe('When it receives a credit card number with 16 digits', () => {
    test('Then it should return that the credit card is valid', () => {
      const creditCardNumber = '1789372997456783';

      const expectedResult = { isValid: true };

      expect(
        validateCreditCard(creditCardNumber, validExpiryDate),
      ).toStrictEqual(expectedResult);
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

      expect(
        validateCreditCard(creditCardNumber, validExpiryDate),
      ).toStrictEqual(expectedResult);
    });
  });

  describe('When it receives a credit card number that is not valid according to the Luhn algorithm', () => {
    test('Then it should return that the credit card is not valid according to the Luhn algorithm', () => {
      const nonValidCreditCardNumber = '8910423685127395';
      const errorMessage =
        'The card is not valid according to the Luhn algorithm';

      const expectedResult = {
        isValid: false,
        errors: { luhnsError: errorMessage },
      };

      expect(
        validateCreditCard(nonValidCreditCardNumber, validExpiryDate).errors
          .luhnsError,
      ).toStrictEqual(expectedResult.errors.luhnsError);
    });
  });

  describe('When it receives an expiry date that is not valid', () => {
    test('Then it should return an error message equal to "The card must have a valid expiration date"', () => {
      const creditCardNumber = '123432434534523523';
      const expiryDate = '12/20';
      const expiryDateErrorMessage =
        'The card must have a valid expiration date';

      const expectedResult = {
        isValid: false,
        errors: { expiryDateError: expiryDateErrorMessage },
      };

      const { isValid, errors } = validateCreditCard(
        creditCardNumber,
        expiryDate,
      );

      expect(isValid).toStrictEqual(expectedResult.isValid);
      expect(errors.expiryDateError).toStrictEqual(
        expectedResult.errors.expiryDateError,
      );
    });
  });
});
