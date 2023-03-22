# Basic operators, maths

## In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.

# Terms: “unary”, “binary”, “operand”

### An operand – is what operators are applied to. For instance, in the multiplication of 5 \* 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

### n operator is unary if it has a single operand.

## EXAMPLE

```js
let x = 1;

x = -x;
alert(x); // -1, unary negation was applied
```

- An operator is binary if it has two operands. The same minus exists in binary form as well:

## example

```js
let x = 1,
  y = 3;
alert(y - x); // 2, binary minus subtracts values
```

# Maths

## The following math operations are supported:

```
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.
```

# Remainder %

The result of a % b is the remainder of the integer division of a by b.

## EXAMPLE

```js
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4
```

# Exponentiation \*\*

### The exponentiation operator `a ** b `raises a to the power of b.

## EXAMPLE

```js
alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16
```

## the exponentiation operator is defined for non-integer numbers as well.

### For example, a square root is an exponentiation by ½:

```js
alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
```

# String concatenation with binary +

### But, if the binary + is applied to strings, it merges them:

## EXAMPLE

```js
let s = "my" + "string";
alert(s); // mystring
```

### Note that if any of the operands is a string, then the other one is converted to a string too.

## For example:

```js
alert("1" + 2); // "12"
alert(2 + "1"); // "21"

alert(2 + 2 + "1"); // "41" and not "221"
```

```js
alert("1" + 2 + 2); // "122" and not "14"
```

### Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

# subtraction and division demo:

```js
lert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers
```

# Numeric conversion, unary +

### The plus + exists in two forms: the binary form that we used above and the unary form.

### The plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

## EXAMPLE

```js
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0
```

### It actually does the same thing as Number(...), but is shorter.

### f we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

## The binary plus would add them as strings:

```js
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings
```

## If we want to treat them as numbers, we need to convert and then sum them:

```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

# Operator precedence

### an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

## Here’s an extract from the <a href="#">precedence</a> table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

```
Precedence 	Name  	  Sign
… 	… 	…
14      unary plus 	    +
14      unarybnegation 	-
13 	    exponentiation 	**
12 	    multiplication  *
12 	    division 	      /
11 	    addition        +
11 	    subtraction    	-
… 	… 	…
2 	    assignment     	=
… 	… 	…
```

### As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

# Assignment

Let’s note that an assignment `= `is also an operator. It is listed in the precedence table with the very low priority of 2.

### x = 2 \* 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

## EXAMPLE

```JS
let x = 2 * 2 + 1;

alert( x ); // 5
```

# Assignment = returns a value

### All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

## Here’s a demo that uses an assignment as part of a more complex expression:

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0
```

# Chaining assignments

### Another interesting feature is the ability to chain assignments:

```js
let a, b, c;

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4
```

### Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

# Modify-in-place

### We often need to apply an operator to a variable and store the new result in that same variable.

## For example:

```js
let n = 2;
n = n + 5;
n = n * 2;
```

## This Notation can be shortened using the operators += and \*=:

## EXAMPLE

```JS
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
```

# Increment/decrement

### Increasing or decreasing a number by one is among the most common numerical operations.

### Increment ++ increases a variable by 1:

# EXAMPLE

```js
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3
```

# Decrement -- decreases a variable by 1:

# EXAMPLE

```js
let counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert(counter); // 1
```

## The operators ++ and -- can be placed either before or after a variable.

### - When the operator goes after the variable, it is in “postfix form”: counter++.

### - The “prefix form” is when the operator goes before the variable: ++counter.

### The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

EXAMPLE

```JS
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
```

#### the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

## Now, let’s use the postfix form:

```js
t counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
```

#### the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

To summarize:

- If the result of increment/decrement is not used, there is no difference in which form to use:

```js
let counter = 0;
counter++;
++counter;
alert(counter); // 2, the lines above did the same
```

- If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

```js
let counter = 0;
alert(++counter); // 1
```

- If we’d like to increment a value but use its previous value, we need the postfix form:

```js
let counter = 0;
alert(counter++); // 0
```

# Bitwise operators

### Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

## The list of operators:

```js
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT(>>> )

```

### These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level.

# Comma

### The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

## For example:

```JS
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```

### Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

# EXPRESSIONS

```JS
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
```
