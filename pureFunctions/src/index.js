document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// immutable vs mutable
// can't be changed vs can be changed
// isn't changed vs changed

const name = 'Paige';
const fullName = name + ' Niedringhaus';
console.log(fullName);

// pure functions
// always return the same thing, with the same input

const addTwo = x => x + 2;
console.log(addTwo(2));
console.log(addTwo(2));

// impure function example - not good
let multi = 3;
const addThree = x => x + multi;
console.log(addThree(2));
multi = 4;
console.log(addThree(2));
multi = 6;
console.log(addThree(2));

// another impure function example - not good
let mult = 2; // external state
const addFour = x => {
  mult += 2;
  return x + mult;
};
console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));
