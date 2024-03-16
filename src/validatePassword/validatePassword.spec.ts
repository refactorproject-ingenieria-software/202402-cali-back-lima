import { validatePassword } from './validatePassword';

describe('GIVEN a validate password function', () => {
  test('THEN it should exist', () => {
    expect(validatePassword).toBeDefined();
  });
});
