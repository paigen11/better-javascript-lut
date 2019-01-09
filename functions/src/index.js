document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// function Declaration
// (this is hoisted)
/* function sayHi() {
  return console.log('hi');
} */

// function Expression (actually an anonymous function)
// they can just be run without needing to be declared
// not hoisted
// passed around or used
/* const sayHi = function() {
  return console.log('hi again');
}; */

// this is how you can name a function expression,
// which is helpful for debugging but not all that used
/* const sayHi = function sayHi() {
  return console.log('hi for the third time');
}; */

// this is a function expression too
/* const sayHi = () => {
  return console.log('hi from an arrow function');
}; */

// this is a function expression as well
const sayHi = () => console.log('hi from a single line');

sayHi();
