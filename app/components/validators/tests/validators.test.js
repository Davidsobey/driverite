import { validatorFactory, withCustomError } from '../index';

describe('Validator Factory validators', () => {
  const formatter = message => message.toUpperCase();
  const validatorWithFormatter = validatorFactory(formatter);

  it('should have the required validator defined', () => {
    expect(validatorWithFormatter.required).not.toBeNull();
  });

  describe('the required validator', () => {
    const MESSAGE = 'this is required';
    const FORMATTED_MESSAGE = 'THIS IS REQUIRED';
    const required = validatorWithFormatter.required(MESSAGE);

    it('should validate when nothing is provded', () => {
      expect(required()).toEqual(FORMATTED_MESSAGE);
    });

    it('should validate for an empty string', () => {
      expect(required('')).toEqual(FORMATTED_MESSAGE);
    });
    describe('with a custom error', () => {
      const CUSTOM_ERROR = 'my custom error';
      const requiredWithCustomError = withCustomError(required, CUSTOM_ERROR);
      it('should be a function', () => {
        expect(typeof requiredWithCustomError).toEqual('function');
      });
      it('should return the custom message instead of the default', () => {
        expect(requiredWithCustomError('')).toEqual(CUSTOM_ERROR);
      });
    });
  });
});
