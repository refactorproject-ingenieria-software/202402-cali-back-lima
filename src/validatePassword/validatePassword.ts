import { validations } from './validatePassword.const';

export interface ValidatePassword {
  isValid: boolean;
  errorMessage: string[];
}

const ensurePasswordIsString = (password: string) => {
  if (typeof password !== 'string') throw new Error('Expected a string.');
};

export const validatePassword = (password: string): ValidatePassword => {
  ensurePasswordIsString(password);

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
