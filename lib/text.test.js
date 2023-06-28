const Validate = require('./text.js');

describe('Validate', () => {
    // TODO: Write a test that checks if isPassword() returns false when the password is greater than 3 characters.
  
    describe('user text Length', () => {
      it('should return true for text less than or equal to 3 characters long', () => {
        const validate = new Validate();
        const result = validate.isInput('RJH');
        console.log(result);
        expect(result).toEqual(true);
      });
    });
});