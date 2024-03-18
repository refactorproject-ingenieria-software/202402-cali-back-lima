import validateCreditCard from './validateCreditCard';

describe('Given a validateCreditCard function', () => {
  const validExpiryDate = '12/24';
  const validCreditCardNumber = '42344123456897385';

  test('It should be defined', () => {
    expect(validateCreditCard).toBeDefined();
  });

  describe('When it receives a credit card number with 16 digits', () => {
    test('Then it should return that the credit card is valid', () => {
      const expectedResult = { isValid: true };

      expect(
        validateCreditCard(validCreditCardNumber, validExpiryDate).isValid,
      ).toStrictEqual(expectedResult.isValid);
    });
  });

  describe('When it receives a credit card number with less than 16 digits', () => {
    test('Then it should return that the credit card is invalid and an error message', () => {
      const nonValidLength = '1233';
      const errorMessages = 'The card must have at least 16 digits';

      const expectedResult = {
        isValid: false,
        errors: { lengthError: errorMessages },
      };

      expect(
        validateCreditCard(nonValidLength, validExpiryDate).errors.lengthError,
      ).toStrictEqual(expectedResult.errors.lengthError);
    });
  });

  describe('When it receives a credit card number that is not valid according to the Luhn algorithm', () => {
    test('Then it should return that the credit card is not valid according to the Luhn algorithm', () => {
      const nonValidLuhnsAlorithm = '22442234524323535334';
      const errorMessage =
        'The card is not valid according to the Luhn algorithm';

      const expectedResult = {
        isValid: false,
        errors: { luhnsError: errorMessage },
      };

      expect(
        validateCreditCard(nonValidLuhnsAlorithm, validExpiryDate).errors
          .luhnsError,
      ).toStrictEqual(expectedResult.errors.luhnsError);
    });
  });

  describe('When it receives an expiry date that is not valid', () => {
    test('Then it should return an error message equal to "The card must have a valid expiration date"', () => {
      const nonValidExpiryDate = '12/20';
      const expiryDateErrorMessage =
        'The card must have a valid expiration date';

      const expectedResult = {
        isValid: false,
        errors: { expiryDateError: expiryDateErrorMessage },
      };

      const { isValid, errors } = validateCreditCard(
        validCreditCardNumber,
        nonValidExpiryDate,
      );

      expect(isValid).toStrictEqual(expectedResult.isValid);
      expect(errors.expiryDateError).toStrictEqual(
        expectedResult.errors.expiryDateError,
      );
    });
  });

  describe('When it receives a credit card number and an expiry date that are both valid', () => {
    test('Then it should return that the credit card is valid', () => {
      const expectedResult = { isValid: true };

      expect(
        validateCreditCard(validCreditCardNumber, validExpiryDate).isValid,
      ).toStrictEqual(expectedResult.isValid);
    });
  });

  describe('When it receives a credit card that it is not Visa, Mastercard, American Express or Diners Club', () => {
    test('Then it should return an error message equal to "The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club"', () => {
      const nonValidNetwork = '12344123456789734';
      const nonValidNetworkErrorMessage =
        'The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club';

      const expectedResult = {
        isValid: false,
        errors: { networkError: nonValidNetworkErrorMessage },
      };

      const { isValid, errors } = validateCreditCard(
        nonValidNetwork,
        validExpiryDate,
      );

      expect(isValid).toStrictEqual(expectedResult.isValid);
      expect(errors.networkError).toStrictEqual(
        expectedResult.errors.networkError,
      );
    });
  });
});
