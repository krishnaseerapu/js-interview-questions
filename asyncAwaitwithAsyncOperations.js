const cart = ["shirt", "shoes"];
const emptyCart = [];

const createOrder = (cartItems) => {
  return new Promise(function (resolve, reject) {
    if (cartItems.length > 0) {
      setTimeout(function () {
        resolve(123);
      }, 2000);
    } else {
      setTimeout(function () {
        reject("Create order got failed");
      }, 2000);
    }
  });
};

const makePayment = (orderId) => {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      setTimeout(function () {
        resolve(321);
      }, 1000);
    } else {
      setTimeout(function () {
        reject("payment got failed");
      }, 1000);
    }
  });
};

const getOrderId = async () => {
  try {
    const orderId = await createOrder(cart);
    console.log("order Created with", orderId);
    if (orderId) {
      try {
        const paymentId = await makePayment();
        console.log("payment got sucess ", paymentId);
      } catch {
        console.log("payment got failed");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

getOrderId();
console.log("hi");
