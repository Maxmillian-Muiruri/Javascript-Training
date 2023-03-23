# Conditional branching: if, '?'

### Sometimes, we need to perform different actions based on different conditions.

### To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

# The “if” statement

### The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

### If we want to execute more than one statement, we have to wrap our code block inside curly braces:

## EXAMPLE

```js
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}
```

# Boolean conversion

### The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

### A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

### Other values become true, so they are called “truthy”.

## The code under this condition would never execute:

## EXAMPLE

```js
if (0) { // 0 is falsy
  ...
}
```

## . But the code inside this condition it will execute

## EXAMPLE

```JS
if (1) { // 1 is truthy
  ...
}
```

# The “else” clause

## The if statement may contain an optional else block. It executes when the condition is falsy.

### EXAMPLE

```JS
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
```

# Several conditions: “else if”

### Sometimes, we’d like to test several variants of a condition. The else if clause.

## EXAMPLE

```js
let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}
```

### n the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

### There can be more else if blocks. The final else is optional.

# Conditional operator ‘?’

## Sometimes, we need to assign a variable depending on a condition.

## EXAMPLE

```js
let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

### The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

#### The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

## The syntax is:

```js
let result = condition ? value1 : value2;
```

## The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

### For example:

```js
let accessAllowed = age > 18 ? true : false;
```

### Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

## In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

## example:

```js
// the same
let accessAllowed = age > 18;
```

# Multiple ‘?’

## A sequence of question mark operators ? can return a value that depends on more than one condition.

## example:

```js
let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);
```

## explanation

### 1. The first question mark checks whether age < 3.

### 2. If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.

### 3. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.

### 4. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.

## but you can also do it using `if...else`

## example

```js
if (age < 3) {
  message = "Hi, baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}
```

# Non-traditional use of ‘?’

## Sometimes the question mark ? is used as a replacement for if:

---

```js
let company = prompt("Which company created JavaScript?", "");

company == "Netscape" ? alert("Right!") : alert("Wrong.");
```

### Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

## Here is the same code using if for comparison:

---

```js
let company = prompt("Which company created JavaScript?", "");

if (company == "Netscape") {
  alert("Right!");
} else {
  alert("Wrong.");
}
```

### The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that.
