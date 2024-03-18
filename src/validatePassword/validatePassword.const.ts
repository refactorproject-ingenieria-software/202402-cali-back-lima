const validateNumbersRegex = /.*\d.*\d.*/;

export const validations = [
  {
    isValid: (password: string) => password.length >= 8,
    errorMessage: 'Password must be at least 8 characters',
  },
  {
    isValid: (password: string) => validateNumbersRegex.test(password),
    errorMessage: 'Password must contain at least 2 numbers',
  },
  {
    isValid: (password: string) => /[A-Z]/.test(password),
    errorMessage: 'Password must contain at least one capital letter',
  },
];
