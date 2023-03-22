# Comparisons

## In JavaScript they are written like this:

### Greater/less than: a > b, a < b.

### Greater/less than or equals: a >= b, a <= b.

### Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.

### Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

# Boolean is the result

### All comparison operators return a boolean value:

- true – means “yes”, “correct” or “the truth”.
- false – means “no”, “wrong” or “not the truth”.

## For example:

```js
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)
```

A comparison result can be assigned to a variable, just like any value:

```js
let result = 5 > 4; // assign the result of the comparison
alert(result); // true
```

# String comparison

### To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

### In other words, strings are compared letter-by-letter.

## For example:

```js
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
```

## Example above, the comparison 'Z' > 'A' gets to a result at the first step.

### The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

### G is the same as G.

### l is the same as l.

### o is greater than e. Stop here. The first string is greater.

## The algorithm to compare two strings is

### Compare the first character of both strings.

### If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done

### Otherwise, if both strings’ first characters are the same, compare the second characters the same way.

### Repeat until the end of either string.

### If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

# Comparison of different types

## When comparing values of different types, JavaScript converts the values to numbers.

## For example:

```js
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1
```

### For boolean values, true becomes 1 and false becomes 0.

## For example:

```js
alert(true == 1); // true
alert(false == 0); // true
```

# Strict equality

## A regular equality check == has a problem. It cannot differentiate 0 from false:

```js
alert(0 == false); // true
```

## The same thing happens with an empty string:

```js
alert("" == false); // true
```

#### This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

# A strict equality operator === checks the equality without type conversion.

### In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

## EXAMPLE:

```JS
alert( 0 === false ); // false, because the types are different
```

### There is also a “strict non-equality” operator !== analogous to !=.

# Comparison with null and undefined

### There’s a non-intuitive behavior when null or undefined are compared to other values.

## For a strict equality check ===

## These values are different, because each of them is a different type.

```js
alert(null === undefined); // false
```

## For a non-strict check ==

## There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

```js
alert(null == undefined); // true
```

### null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

# null vs 0

comparing null with a zero:

```js
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true
```

## An incomparable undefined

### The value undefined shouldn’t be compared to other values:

```js
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
```

## We get these results because:

- Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

- The equality check (3) returns false because undefined only equals null, undefined, and no other value.
