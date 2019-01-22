// generate random color
// // RGB 0-255
// apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);
const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => {
  document.body.style.backgroundColor = color;
};

// written as a single responsibility function
const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
};

console.log(generateColorValue());
console.log(createColor());
console.log(applyColorToBody());
console.log(addRandomColorToBg());
