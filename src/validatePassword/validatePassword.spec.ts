import { validatePassword } from './validatePassword';

describe('GIVEN a validate password function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('THEN it should exist', () => {
    expect(validatePassword).toBeDefined();
  });

  describe('WHEN it recives a parameter', () => {
    const validationResult = validatePassword('mypassword1');
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
      expect(validationResult.isValid).toBe(false);
      expect(validationResult.errorMessage).toContain(
        'Password must contain at least 2 numbers',
      );
    });

    test('THEN it should contain at least 1 capital letter', () => {
      expect(validationResult.isValid).toBe(false);
      expect(validationResult.errorMessage).toContain(
        'Password must contain at least one capital letter',
      );
    });
    test('THEN it should contain at least 1 special character', () => {
      expect(validationResult.isValid).toBe(false);
      expect(validationResult.errorMessage).toContain(
        'Password must contain at least one special character',
      );
    });
  });
});
