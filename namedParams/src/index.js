document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// when it comes to naming: consistency is king
// clear, searchable and obvious
// use var names that make sense for data

// constant variables uppercase syntax common
const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

// by wrapping the params in curly braces they become named params
// and the order they're there doesn't matter
const makePerson = ({ firstName, age, lastName, job }) => {
  return {
    name: firstName + ' ' + lastName,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER,
  };
};

const dev = makePerson({
  firstName: 'Paige',
  lastName: 'Niedringhaus',
  age: 29,
  job: 'Web Dev',
});

// DO NOT DO!
const oldHireDev = ({ devInfo }) => {
  const hiredDevInfo = {
    hired: true,
    ...devInfo,
  };
  return hiredDevInfo;
};

// correct
const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev,
  };
  return hiredDev;
};

console.log(hireDev({ dev }));
