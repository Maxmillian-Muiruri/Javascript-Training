# Logical operators

## There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

# || (OR)

## The “OR” operator is represented with two vertical line symbols:

## example

```js
result = a || b;
```

### In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

## There are four possible logical combinations:

## example

```js
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false
```

## If an operand is not a boolean, it’s converted to a boolean for the evaluation.

## number 1 is treated as true, the number 0 as false:

```js
if (1 || 0) {
  // works just like if( true || false )
  alert("truthy!");
}
```

### OR || is used in an if statement to test if any of the given conditions is true.

## example

```js
let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}
```

# OR "||" finds the first truthy value

## Given multiple OR’ed values:

```js
result = value1 || value2 || value3;
```

## The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were false), returns the last operand.

## A value is returned in its original form, without the conversion.

### In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

F## or instance:

```js
alert(1 || 0); // 1 (1 is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)

alert(undefined || null || 0); // 0 (all falsy, returns the last value)
```

## 1. Getting the first truthy value from a list of variables or expressions.

### we have firstName, lastName and nickName variables, all optional

## Let’s use OR || to choose the one that has the data and show it(or "Anonymous" if nothing set):

```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
```

## 2. Short-circuit evaluation.

### Another feature of OR || operator is the so-called “short-circuit” evaluation.

#### It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

## In the example below, only the second message is printed:

```js
true || alert("not printed");
false || alert("printed");
```

### In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

# && (AND)

## The AND operator is represented with two ampersands &&:

### In classical programming, AND returns true if both operands are truthy and false otherwise:

## example

```js
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

## example with if

```js
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}
```

# AND “&&” finds the first falsy value

### for example Given multiple AND’ed values:

```js
result = value1 && value2 && value3;
```

## The AND && operator does the following:

### Evaluates operands from left to right.

### For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.

### If all operands have been evaluated (i.e. all were truthy), returns the last operand.

### In other words, AND returns the first falsy value or the last value if none were found.

## Examples:

```js
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0
```

## We can also pass several values in a row. See how the first falsy one is returned:

## example

```js
alert(1 && 2 && null && 3); // null
```

## When all values are truthy, the last value is returned:

```js
alert(1 && 2 && 3); // 3, the last one
```

# ! (NOT)

### The boolean NOT operator is represented with an exclamation sign !.

## The operator accepts a single argument and does the following:

1. Converts the operand to boolean type: true/false.
2. Returns the inverse value.

## EXAMPLE

```js
alert(!true); // false
alert(!0); // true
```

## A double NOT !! is sometimes used for converting a value to boolean type:

```js
alert(!!"non-empty string"); // true
alert(!!null); // false
```

### That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

# The precedence of `NOT !` is the highest of all logical operators, so it always executes first, before` &&` or `||.`
