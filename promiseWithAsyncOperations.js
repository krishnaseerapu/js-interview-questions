const cart = ["shirt", "shoes"];
const emptyCart = [];

const makePayment = (orderId) => {
  const paymentPromise = new Promise(function (resolve, reject) {
    if (orderId) {
      setTimeout(function () {
        resolve(321);
      }, 3000);
    } else {
      reject("Payment got failed");
    }
  });
  return paymentPromise;
};

const createOrder = (cartItems) => {
  const createOrderPromise = new Promise(function (resolve, reject) {
    if (cartItems.length > 0) {
      setTimeout(function () {
        resolve(123);
      }, 3000);
    } else {
      setTimeout(function () {
        reject("create order got failed");
      }, 3000);
    }
  });
  return createOrderPromise;
};

createOrder(cart)
  .then(function (orderId) {
    console.log("Order Created with orderid", orderId);
    return makePayment(orderId);
  })
  .then(function (paymentId) {
    console.log("Payment done successfully with payment Id ", paymentId);
  })
  .catch(function (err) {
    console.log(err);
  });
