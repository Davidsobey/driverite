// const internationalize = (validator) => (formatter) => (message) =>
//   validator(formatter(message));
import { IntlProvider } from 'react-intl';
import messages from './messages';

const language = 'en';

const { intl } = new IntlProvider(
  { locale: language, messages },
  {},
).getChildContext();

const VALIDATION_PASSED = undefined;

const requiredValidatorCurry = message => value =>
  (value ? VALIDATION_PASSED : message);

const validEmailValidatorCurry = message => value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message
    : VALIDATION_PASSED);

export const withCustomError = (validator, customMessage) => (value) => {
  const result = validator(value);
  if (result === VALIDATION_PASSED) {
    return VALIDATION_PASSED;
  }
  return customMessage;
};

export const validatorFactory = formatter => ({
  required: message => requiredValidatorCurry(formatter(message)),
  validEmail: message => validEmailValidatorCurry(formatter(message)),
});

const validatorWithFormatter = validatorFactory(intl.formatMessage);
export const required = validatorWithFormatter.required(messages.requiredError);
export const validEmail = validatorWithFormatter.validEmail(
  messages.emailError,
);
