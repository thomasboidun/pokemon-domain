import { IndividualValue } from './individual-value';

describe('IndividualValue', () => {
  describe('create()', () => {
    it('should create a valid IndividualValue when input is between 0 and 31', () => {
      for (let iv = 0; iv <= 31; iv++) {
        const individualValue = IndividualValue.create(iv);
        expect(individualValue.value).toBe(iv);
      }
    });

    it('should throw when input is below 0', () => {
      expect(() => IndividualValue.create(-1)).toThrow(
        'Individual value must be an integer number between 0 and 31.'
      );
    });

    it('should throw when input is above 31', () => {
      expect(() => IndividualValue.create(32)).toThrow(
        'Individual value must be an integer number between 0 and 31.'
      );
    });

    it('should throw when input is a float', () => {
      expect(() => IndividualValue.create(15.5)).toThrow(
        'Individual value must be an integer number between 0 and 31.'
      );
    });

    it('should throw when input is not a number', () => {
      expect(() => IndividualValue.create(NaN)).toThrow(
        'Individual value must be an integer number between 0 and 31.'
      );
    });
  });
});
