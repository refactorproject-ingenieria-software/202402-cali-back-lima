import { validations } from './validatePassword.const';

interface ValidatePassword {
  isValid: boolean;
  errorMessage: string[];
}

const isValidateTypeofPassword = (password: string) => {
  if (typeof password !== 'string') throw new Error('Expected a string.');
};

export const validatePassword = (password: string): ValidatePassword => {
  isValidateTypeofPassword(password);

  return validations.reduce<ValidatePassword>(
    (accumulate, value) => {
      if (!value.isValid(password)) {
        accumulate.isValid = false;
        accumulate.errorMessage.push(value.errorMessage);
      }
      return accumulate;
    },
    { isValid: true, errorMessage: [] },
  );
};
