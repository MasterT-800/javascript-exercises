const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(num) {
  return num.reduce((total, current) => total + current, 0);
	
};

const multiply = function(num) {
  return num.reduce((total, current) => total * current, 1);

};

const power = function(x, n) {
  let total = x;
  for(let i = 1; i < n; i++){
    total = total * x;
  }
  return total;
};

const factorial = function(num) {
  total = 1;
	for (let i = 1; i <= num; i++){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
