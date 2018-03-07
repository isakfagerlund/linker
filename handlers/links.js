var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
// base58 in this case
var base = alphabet.length;

// base10 unique global id from batabase
// convert base10 int to base58 string
exports.encode = function(num) {
  var encoded = "";
  while (num) {
    // Gets the remainder from num mod base58
    var remainder = num % base;
    // Divide number with base58, loops until divided is 0
    num = Math.floor(num / base);
    // Add character from base58 to the encoded string
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
};

// convert base58 string to base10 int
exports.decode = function(str) {
  var decoded = 0;
  while (str) {
    // Finds index of string pos[0] in base58 alphabet
    var index = alphabet.indexOf(str[0]);
    // creates the power from the string
    var power = str.length - 1;
    // sum of it all
    decoded += index * Math.pow(base, power);
    // Move one step in string
    str = str.substring(1);
  }
  return decoded;
};
