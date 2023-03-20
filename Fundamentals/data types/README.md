# Data types.

### define the type of data that a variable can store.

# JavaScript has 8 Datatypes.

1. STRING
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

## there are divided into two:

# 1. premitive datatypes:

They are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). I

## 1. String

### Strings are written with quotes. You can use single or double quotes:

EXAMPLE

```js
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = "Volvo XC60";
```

## 2. Number

### All JavaScript numbers are stored as decimal numbers (floating point).

### Numbers can be written with, or without decimals:

EXAMPLE

```js
// With decimals:
let x1 = 34.0;

// Without decimals:
let x2 = 34;
```

## 3. Bigint

### A BigInt value is created by appending (n )to the end of an integer:

### javaScript numbers are stored in a a 64-bit floating-point format.

### JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

EXAMPLE

```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

## 4. Boolean

### The boolean type has only two values: true and false.

### This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

EXAMPLE

```js
let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")
```

## 5. Undefined

### In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

EXAMPLE

```js
let age;

alert(age); // shows "undefined"
```

## 6. Null

### The special null value does not belong to any of the types described above.

### It forms a separate type of its own which contains only the null value:

EXAMPLE

```js
let age = null;
```

## 7. Symbol

### The symbol type is used to create unique identifiers for objects

# 2. non-premitive datatypes:

## 1. objects

### JavaScript objects are written with curly braces {}.

### Object properties are written as name:value pairs, separated by commas.

EXAMPLE

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

### The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

# The typeof operator

### The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

### A call to (typeof x) returns a string with the type name:

1. typeof undefined // "undefined"

2. typeof 0 // "number"

3. typeof 10n // "bigint"

4. typeof true // "boolean"

5. typeof "foo" // "string"

6. typeof Symbol("id") // "symbol"

7. typeof Math // "object" (1)

8. typeof null // "object" (2)

9. typeof alert // "function" (3)
