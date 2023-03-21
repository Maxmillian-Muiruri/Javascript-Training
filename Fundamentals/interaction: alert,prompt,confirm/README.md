# Interaction: alert, prompt, confirm

### As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.

# 1 alert

### This one we’ve seen already. It shows a message and waits for the user to press “OK”.

For example:

```js
alert("Hello");
```

### The mini-window with the message is called a modal window. The word "modal" means that the visitor can’t interact with the rest of the page until they have dealt with the window.

# 2. prompt

## The function prompt accepts two arguments:

### . title: The text to show the visitor.

### . default: An optional second parameter, the initial value for the input field.

### \* It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

### \* The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing Cancel or hitting the Esc key.

### The call to prompt returns the text from the input field or null if the input was canceled.

EXAMPLE

```js
var age = prompt("How old are you?", 50);

alert("You are " + age + " years old.");
```

# 3. Confirm

### The function confirm shows a modal window with a question and two buttons: OK and Cancel.

### The result is true if OK is pressed and false otherwise.

EXAMPLE

```js
let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed
```
