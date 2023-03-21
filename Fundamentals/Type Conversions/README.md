# Type Conversions

## most of the time, operators and functions automatically convert the values given to them to the right type.

# String Conversion

### String conversion happens when we need the string form of a value.

### For example, alert(value) does it to show the value.

### We can also call the `String(value)` function to convert a value to a string:

EXAMPLE

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

### String conversion is mostly obvious. A `false` becomes `"false", null` becomes `"null",`

# Numeric Conversion

## Numeric conversion in mathematical functions and expressions happens automatically.

### For example, when division / is applied to non-numbers:

```js
alert("6" / "2"); // 3, strings are converted to numbers
```

### We can also use the `Number(value)` function to explicitly convert a `value `to a number:

example

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

## If the string is not a valid number, the result of such a conversion is <u>`NaN`</u>. For EXAMPLE:

```js
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

# Numeric conversion rules:

### undefined: NaN

### null: 0

### true and false: 1 and 0

### string: Whitespaces (includes spaces, tabs <u>`\t`</u>, newlines <u>`\n`</u> etc.) from the start and end are removed. If the remaining string is empty, the result is `0.` Otherwise, the number is “read” from the string. An error gives `NaN.`

# example:

```js
ber("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

### Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.
