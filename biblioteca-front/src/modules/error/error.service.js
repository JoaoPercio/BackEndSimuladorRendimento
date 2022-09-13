import { ERRORS_CODES } from './error.constants';

export function getErrorDescription(errorCode) {
  return Object.keys(ERRORS_CODES).includes(errorCode)
    ? ERRORS_CODES[errorCode]
    : errorCode;
}
