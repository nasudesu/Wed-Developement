/*
// function declaration
function square(x) {
  return x * x;
}

// function expression
var square = function(x) {
  return x * x;
};
*/

// 1.
function cube(x) {
  return x * x * x;
}

var cube = function(x) { return x * x * x; };

console.log(cube(3));

// 2.
function fullName(first, last) {
  return first + " " + last;
}

var fullName = function(first, last) { return first + " " + last; };

console.log(fullName("John", "Doe"));

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

var power = function(base, exp) { 
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

console.log(power(2, 3));

// 4.
function sumCubes(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

var sumCubes = function(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
    console.log(total);
  }
  return total;
}

console.log(sumCubes([1, 2, 3]));

/*
1.Why does JavaScript output undefined instead of throwing an error in the following code?

console.log(message);
var message = 'Hi there!';

Because of hoisting, the variable declaration is hoisted to the top of the scope, but the assignment is not. So the code is interpreted as:

2. Why does JavaScript throw an error instead of logging undefined in the following code?

console.log(message);
let message = 'Hi there!';

because let and const are not hoisted. So the code is interpreted as: 


3. Explain precisely what happens when the following code is executed.

console.log(showMessage());

const showMessage = function(){
  return 'Hi there!';
};

The variable declaration is hoisted to the top of the scope, but the assignment is not. So the code is interpreted as:


4.  Why does JavaScript not throw any errors when the following code is executed?

console.log(showMessage());

function showMessage(){
  return 'Hi there!';
}

Because function declarations are hoisted to the top of the scope. So the code is interpreted as:

*/


/*
Restructure the following instances of code to work correctly:

// 1.
for(var i = 0; i < values.length; i++){
  console.log(values[i]);
}
var values = [10, 20, 30];
-----------------------------------
var values = [10, 20, 30];
for(var i = 0; i < values.length; i++){
  console.log(values[i]);
}
*/

/*
// 2.
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

var lastLogin = '1/1/1970';
-----------------------------------------
lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
var lastLogin

*/






