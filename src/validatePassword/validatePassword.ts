interface ValidatePassword {
  isValid: boolean;
  errorMessage: string[];
}

const isValidateTypeofPassword = (password: string) => {
  if (typeof password !== 'string') throw new Error('Expected a string.');
};

export const validatePassword = (password: string): ValidatePassword => {
  isValidateTypeofPassword(password);
  const validateNumbersRegex = /.*\d.*\d.*/;
  const validations = [
    {
      isValid: password.length >= 8,
      errorMessage: 'Password must be at least 8 characters',
    },
    {
      isValid: validateNumbersRegex.test(password),
      errorMessage: 'Password must contain at least 2 numbers',
    },
  ];
  const result: ValidatePassword = validations.reduce(
    (accumulate, value) => {
      if (!value.isValid) {
        accumulate.isValid = false;
        accumulate.errorMessage.push(value.errorMessage);
      }
      return accumulate;
    },
    { isValid: true as boolean, errorMessage: [] as string[] },
  );
  return result;
};
