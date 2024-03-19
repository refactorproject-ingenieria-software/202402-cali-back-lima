export interface ValidatePasswordResult {
  isValid: boolean;
  errorMessage: string[];
}

export type Validations = {
  isValid: (password: string) => boolean;
  errorMessage: string;
};
