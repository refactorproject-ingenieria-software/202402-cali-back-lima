interface ValidatePassword {
  isValid: boolean;
  errorMessage: string[];
}

export const validatePassword = (password: string): ValidatePassword => {
  const result: ValidatePassword = {
    isValid: true,
    errorMessage: [],
  };
  if (typeof password !== 'string') throw new Error('Expected a string.');
  if (password.length < 8) {
    result.isValid = false;
    result.errorMessage.push('Password must be at least 8 characters');
  }
  return result;
};
