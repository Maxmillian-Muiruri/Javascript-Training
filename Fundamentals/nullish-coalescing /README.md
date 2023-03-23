# Nullish coalescing operator '??'

## The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

## The result of a ?? b is:

- if a is defined, then a.
- if a isn't defined, then b.

### In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

### The common use case for ?? is to provide a default value.

## For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

```js
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
```

### Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.

### We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.

## We can use the ?? operator for that:

```js
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```

# Comparison with ||

## The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

### For example, in the code above we could replace ?? with || and still get the same result:

## The important difference between them is that:

### || returns the first truthy value.

### ?? returns the first defined value.

### In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

## EXAMPLE

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

### The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.

- so the result of || is the second argument, 100.

### The height ?? 100 checks height for being null/undefined, and it’s not,

- so the result is height “as is”, that is 0.

# Precedence

## The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

### That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, \*.

## we can add precedence like this :

```js
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

# Using ?? with && or ||

### Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

### for example The code below triggers a syntax error:

```js
let x = 1 && 2 ?? 3; // Syntax error
```

But we can Use explicit parentheses to work around it:

```js
let x = (1 && 2) ?? 3; // Works

alert(x); // 2
```
