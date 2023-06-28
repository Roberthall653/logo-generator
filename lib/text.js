function Validate() {}

Validate.prototype.isInput = (input) => {
  // TODO: Write code that checks if the password is greater than 3 characters and returns false if so.
  var valid = input.length <=3;
  return valid || "Please enter a valid value";

};




module.exports = Validate;