var alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
// base49 in this case
var base = alphabet.length;

// convert base10 int to base49 string
exports.encode = function(num) {
  var encoded = "";
  while (num) {
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
};

// convert base49 string to base10 int
exports.decode = function(str) {
  var decoded = 0;
  while (str) {
    var index = alphabet.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * Math.pow(base, power);
    str = str.substring(1);
  }
  return decoded;
};
