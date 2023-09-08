const cart = ["shoes", "pants", "shirt"];

const updateWallet = (paymentId) => {
  if (paymentId) {
    setTimeout(function () {
      console.log("wallet updated");
    }, 3000);
  }
};

const proceedPayment = (orderid) => {
  if (orderid) {
    setTimeout(function () {
      console.log("Payment successful");
      updateWallet(321);
    }, 3000);
  }
};

const creteOrder = (cartItems, paymentMethod) => {
  if (cartItems) {
    setTimeout(function () {
      console.log("oreder created");
      paymentMethod(123);
    }, 3000);
  }
};

creteOrder(cart, proceedPayment);
console.log("hi");
