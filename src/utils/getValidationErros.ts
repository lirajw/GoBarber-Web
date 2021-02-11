import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // interface com propriedades dinamicas;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
