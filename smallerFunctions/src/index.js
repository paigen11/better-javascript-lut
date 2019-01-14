document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const cart = ['10', '5', '15'];

const fakeAPICharge = total => true;
const fakeSendRecipt = total => true;

const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);

const checkout = cart => {
  const subTotal = getSubTotal(cart);
  const total = subTotal + 10;
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    fakeSendRecipt({
      email: 'fakeemail@gmail.com',
      total,
    });
  }
  return orderSuccess;
};

checkout(cart);
