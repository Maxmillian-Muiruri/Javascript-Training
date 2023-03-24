# The "switch" statement

## A switch statement can replace multiple if checks.

## It gives a more descriptive way to compare a value with multiple variants.

# The syntax

## The switch has one or more case block and an optional default.

## EXAMPLE

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

## The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.

## If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).

## If no case is matched then the default code is executed (if it exists).

# EXAMPLE

## Use today's weekday number to calculate the weekday name (Sunday=0, Monday=1, Tuesday=2, ...):

```js
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}
```

## An example without break:

```js
let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
  case 4:
    alert("Exactly!");
  case 5:
    alert("Too big");
  default:
    alert("I don't know such values");
}
```

## In the example above we’ll see sequential execution of three alerts:

```js
alert("Exactly!");
alert("Too big");
alert("I don't know such values");
```

## Any expression can be a switch/case argument

### Both switch and case allow arbitrary expressions.

## For example:

```js
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```

### Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code is executed.

# Grouping of “case”

## EXAMPLE

```js
var text;
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  default:
    text = "Looking forward to the Weekend";
    break;
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
}
```

# Type matters

## `NB`The equality check is always strict. The values must be of the same type to match.

## For example

```js
let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    alert("One or zero");
    break;

  case "2":
    alert("Two");
    break;

  case 3:
    alert("Never executes!");
    break;
  default:
    alert("An unknown value");
}
```

- For 0, 1, the first alert runs.
- For 2 the second alert runs.
- But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
