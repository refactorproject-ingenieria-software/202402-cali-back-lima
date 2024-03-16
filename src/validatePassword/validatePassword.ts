export const validatePassword = (password: string) => {
  if (typeof password !== 'string') throw new Error('Expected a string.');
  return password;
};
