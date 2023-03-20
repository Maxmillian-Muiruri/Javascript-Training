# Variables

#### A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

# usage of variables

#### ariables are used to store information.

# Type of variables

## 1 local variables

--Variables declared within a JavaScript function, become LOCAL to the function.

--They can only be accessed from within the function.
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

## Example

```js
function myFunction() {
  let carName = "Volvo";
}
```

## 2 global js variables

A variable declared outside a function, becomes GLOBAL.

#### Global variables can be accessed from anywhere in a JavaScript program.

# Example

```js
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
```

## variables

### diffrence btwn const, let, var.

var keyword is used in all JavaScript code from 1995 to 2015.
If you want your code to run in older browsers, you must use var.

The let and const keywords were added to JavaScript in 2015.

# javascript const

#### The const keyword was introduced in ES6 (2015).

##### Variables defined with const cannot be Redeclared.

#### Variables defined with const cannot be Reassigned.

V#### ariables defined with const have Block Scope.

```js
Example;
const PI = 3.141592653589793;
```

# When to use JavaScript const?

#### you should declare a variable with const only when you know that the value should not change

### Use const when you declare:

    A new Array
    A new Object
    A new Function
    A new RegExp

# JavaScript Let

EXAMPLE

```js
let x = 2;
```

#### The let keyword was introduced in ES6 (2015).

#### Variables defined with let can not be redeclared.

# EXAMPLE

```JS
YOU CAN'T DO THIS

let x = "John Doe";
let x = 0;
```

#### Variables defined with let must be declared before use.

#### Variables defined with let have block scope.

# JavaScript var

## Definition and Usage.

#### The var statement declares a variable.

#### Variables are containers for storing information.

#### Creating a variable in JavaScript is called "declaring" a variable:

# EXAMPLE

## Create a variable called carName and assign the value "Volvo" to it:

```js
var Name = "maxmillian";
```

### The equal sign is nused to assign a value to the variable.

### A variable declared without a value have the value undefined.

# variables naming rules

#### A variable name must start with a letter or an underscore character (\_)

#### A variable name cannot start with a digit.

#### variable name can only contain alpha-numeric characters and underscores (a-z, A-Z, 0-9, and \_ )

#### Variable names are case-sensitive (age, Age and AGE are three different variables)

#### There is no limit on the length of the variable name

#### A variable name cannot contain spaces

### The variable name cannot be any Go keyword.

# Multi-Word Variable Names

### Variable names with more than one word can be difficult to read

### There are several techniques you can use to make them more readable: Example:

# 1 Camel Case

### Each word, except the first, starts with a capital letter:

myVariableName = "John"

# 2 Pascal Case

### Each word starts with a capital letter:

MyVariableName = "John"

# 2 Snake Case

### Each word is separated by an underscore character:

my_variable_name = "John"
