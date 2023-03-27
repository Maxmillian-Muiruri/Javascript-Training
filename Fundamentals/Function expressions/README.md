# Function expressions

## In JavaScript, a function is not a “magical language structure”, but a special kind of value.

### The syntax that we used before is called a Function Declaration:

```js
function sayHi() {
  alert("Hello");
}
```

### It allows us to create a new function in the middle of any expression.

## For example:

```js
let sayHi = function () {
  alert("Hello");
};
```

### Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

# Function is a value

## no matter how the function is created, a function is a value. Both examples below store a function in the sayHi variable.

```js
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code
```

### We can copy a function to another variable:

```js
function sayHi() {
  // (1) create
  alert("Hello");
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
```

# Callback functions

## We’ll write a function ask(question, yes, no) with three parameters:

## The function should ask the question and, depending on the user’s answer, call yes() or no():

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

### We can use Function Expressions to write an equivalent, shorter function:

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
```

### Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

# Function Expression vs Function Declaration

## Let’s formulate the key differences between Function Declarations and Expressions.

## Function Declaration:

### a function, declared as a separate statement, in the main code flow:

```js
// Function Declaration
function sum(a, b) {
  return a + b;
}
```

## A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

## Function Expression:

### a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

```js
// Function Expression
let sum = function (a, b) {
  return a + b;
};
```

## A Function Expression is created when the execution reaches it and is usable only from that moment.

### For example, this works:

```js
sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

### The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

### …If it were a Function Expression, then it wouldn’t work:

```js
sayHi("John"); // error!

let sayHi = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};
```

## Another special feature of Function Declarations is their block scope.

### In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

### or instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

## If we use Function Declaration, it won’t work as intended:

```js
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined
```

### That’s because a Function Declaration is only visible inside the code block in which it resides.

## What can we do to make welcome visible outside of if?

### The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

## This code works as intended:

```js
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // ok now
```
