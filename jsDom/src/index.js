document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// doc resource https://developer.mozilla.org/en-US/

const heading = document.createElement('h1');
heading.innerHTML = '<span>Hello</span> ' + document.URL;
document.body.appendChild(heading);

console.log(document.URL);
