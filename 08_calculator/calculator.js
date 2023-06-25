const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(xs) {
	if (xs.length == 0) return 0
  return xs.pop() + sum(xs)
};

const multiply = function(...numbers) {
  return numbers.reduce((a,b) => a*b)
};

const power = function(n,m) {
	if (m == 0){
    return 1
  }
  else if (m < 0) {
    return (1/n) * power(n, m+1)
  }
  return n * power(n, m-1)
};

const factorial = function(x) {
	if (x == 0) return 1
  return x * factorial(x-1)
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
