document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// this is the spread operator
// by using the ... at the end of the array, everything from c on will be printed out
const newArray = ['hi', 'paige', 'newItem', 'spreadFtw'];
const [a, b, ...c] = newArray;
// const a = newArray[0];
// const b = newArray[1];
console.log(c);

/* const person = {
  name: 'Paige',
  age: 29,
  job: 'web dev',
}; */

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job,
  };
};

console.log(makePerson('Paige', 29, 'web dev'));

// the same destructuring we can do with an array, we can do with an object
const dev = makePerson('paige', 29, 'web dev');
// X const name = dev.name;
// X const devName = dev.name;

// it's like in react const {names} = this.props;
// the second param is just a fictional name for the rest of the object / array
const { name, ...rest } = dev;
console.log(name, rest);

const sayHi = () => console.log('hiya');

sayHi();
