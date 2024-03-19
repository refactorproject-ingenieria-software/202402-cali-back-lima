import { validations } from './validatePassword.const';
import { ValidatePasswordResult, Validations } from './validatePassword.types';

const ensurePasswordIsString = (password: string) => {
  if (typeof password !== 'string') throw new Error('Expected a string.');
};

const generateValidation = (
  password: string,
): ((
  validationResult: ValidatePasswordResult,
  currentValidation: Validations,
) => ValidatePasswordResult) => {
  return (validationResult, currentValidation) => {
    if (!currentValidation.isValid(password)) {
      validationResult.isValid = false;
      validationResult.errorMessage.push(currentValidation.errorMessage);
    }
    return validationResult;
  };
};

export const validatePassword = (password: string): ValidatePasswordResult => {
  ensurePasswordIsString(password);
  return validations.reduce<ValidatePasswordResult>(
    generateValidation(password),
    {
      isValid: true,
      errorMessage: [],
    },
  );
};
