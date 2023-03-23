// What is the code below going to output?

alert( null || 2 || undefined );

// answer is 2, that’s the first truthy value.

// 
if (age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

if(!(age <=14 ||age >=90));

if(age <14 ||age >=0);

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

//     // If it equals “TheMaster”, then show “Welcome!”,
//     // Another string – show “Wrong password”,
//     // For an empty string or cancelled input, show “Canceled”

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}