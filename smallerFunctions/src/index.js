document.getElementById('app').innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
// constant variables
const SHIPPING_COST = 10;

const cart = ['10', '5', '15'];

const fakeAPICharge = total => true;
const fakeSendRecipt = total => true;

// pure functions are smaller and single responsibility
// (which makes them more individually testable)
const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
const getTotal = subTotal => subTotal + SHIPPING_COST;
const sendReceipt = ({ email, total }) =>
  fakeSendReceipt({
    email,
    total,
  });

// makes this checkout function more readable
const checkout = cart => {
  const subTotal = getSubTotal(cart);
  const total = getTotal(subTotal);
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    sendReceipt({ email: 'fakeemail@gmail.com', total });
  }
  return orderSuccess;
};

checkout(cart);
