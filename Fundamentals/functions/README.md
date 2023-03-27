# Functions

## Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

# Function Declaration

# To create a function we can use a function declaration.

## It looks like this:

```js
function name(parameter1, parameter2, ...parameterN) {
  // body
}
```

### The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

# Local variables

## A variable declared inside a function is only visible inside that function.

## For example:

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function
```

# Outer variables

## A function can access an outer variable as well,

## for example:

```js
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John
```

## The function has full access to the outer variable. It can modify it as well.

For Example:

```js
let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function
```

## The outer variable is only used if there’s no local one.

## in the code below the function uses the local userName. The outer one is ignored:

```js
let userName = "John";

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = "Hello, " + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable
```

## Variables declared outside of any function, such as the outer userName in the code above, are called global.

## Global variables are visible from any function (unless shadowed by locals).

# Parameters

## We can pass arbitrary data to functions using parameters.

### In the example below, the function has two parameters: from and text.

```js
function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer

  alert(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann
```

## When a value is passed as a function parameter, it’s also called an argument.

### A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).

# Default values

## If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

### We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

```js
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
```

### Now if the text parameter is not passed, it will get the value "no text given".

# Alternative default parameters

## Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

### We can check if the parameter is passed during the function execution, by comparing it with undefined:

```js
function showMessage(text) {
  // ...

  if (text === undefined) {
    // if the parameter is missing
    text = "empty message";
  }

  alert(text);
}

showMessage(); // empty message
```

#### …Or we could use the || operator:

```js
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
```

#### Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

```js
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

# Returning a value

## A function can return a value back into the calling code as the result.

### The simplest example would be a function that sums two values:

```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```

### There may be many occurrences of return in a single function. For instance:

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}
```

## t is possible to use return without a value. That causes the function to exit immediately.

### For example:

```js
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Showing you the movie"); // (*)
  // ...
}
```

### In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

# Naming a function

## Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

### is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

### For instance, functions that start with "show" usually show something.

### Function starting with…

    ```js
    "get…" – return a value,
    "calc…" – calculate something,
    "create…" – create something,
    "check…" – check something and return a boolean
    ```

### example of such names:

```
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

### With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

# Functions == Comments

## Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

## A separate function is not only easier to test and debug – its very existence is a great comment!

## For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.

### The first variant uses a label:

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}
```

### The second variant uses an additional function isPrime(n) to test for primality:

```js
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```

### The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing.

#### So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.
