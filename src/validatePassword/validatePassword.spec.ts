import { validatePassword } from './validatePassword';

describe('GIVEN a validate password function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('THEN it should exist', () => {
    expect(validatePassword).toBeDefined();
  });

  describe('WHEN it recives a parameter', () => {
    test('THEN it should be a string', () => {
      expect(() => validatePassword(123 as unknown as string)).toThrow(
        'Expected a string.',
      );
    });

    test('THEN it should has at least 8 characters', () => {
      const validationResult = validatePassword('mypass');
      expect(validationResult.isValid).toBe(false);
      expect(validationResult.errorMessage).toContain(
        'Password must be at least 8 characters',
      );
    });

    test('THEN it should contain at least 2 numbers', () => {
      const validationResult = validatePassword('mypassword1');
      expect(validationResult.isValid).toBe(false);
      expect(validationResult.errorMessage).toContain(
        'Password must contain at least 2 numbers',
      );
    });
  });
});
