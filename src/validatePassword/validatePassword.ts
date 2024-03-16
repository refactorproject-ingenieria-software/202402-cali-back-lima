interface ValidatePassword {
  isValid: boolean;
  errorMessage: string[];
}

export const validatePassword = (password: string): ValidatePassword => {
  const validateNumbersRegex = /.*\d.*\d.*/;
  const result: ValidatePassword = {
    isValid: true,
    errorMessage: [],
  };
  if (typeof password !== 'string') throw new Error('Expected a string.');
  if (!validateNumbersRegex.test(password)) {
    result.isValid = false;
    result.errorMessage.push('Password must contain at least 2 numbers');
  }
  if (password.length < 8) {
    result.isValid = false;
    result.errorMessage.push('Password must be at least 8 characters');
  }
  return result;
};
