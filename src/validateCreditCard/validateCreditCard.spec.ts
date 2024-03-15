import validateCreditCard from './validateCreditCard';

describe('Given a validateCreditCard function', () => {
  test('It should be defined', () => {
    expect(validateCreditCard).toBeDefined();
  });

  describe('When it receives a credit card number with 16 digits', () => {
    test('Then it should return that the credit card is valid', () => {
      const creditCardNumber = '1234567891234567';
      const expectedResult = { isValid: true };

      expect(validateCreditCard(creditCardNumber)).toBe(expectedResult);
    });
  });
});
