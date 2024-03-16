import { validatePassword } from './validatePassword';

describe('GIVEN a validate password function', () => {
  test('THEN it should exist', () => {
    expect(validatePassword).toBeDefined();
  });

  describe('WHEN it recives a parameter', () => {
    test('THEN it should be a string', () => {
      expect(() => validatePassword(123 as unknown as string)).toThrow(
        'Expected a string.',
      );
      expect(validatePassword('string')).toBe(typeof 'string');
    });
  });
});
