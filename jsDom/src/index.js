const logo = document.getElementById('logo');
logo.innerText = 'YO!';

// doc resource https://developer.mozilla.org/en-US/

const heading = document.createElement('h1');
heading.innerHTML = '<span>Hello</span> ' + document.URL;
document.body.appendChild(heading);

console.log(document.URL);
