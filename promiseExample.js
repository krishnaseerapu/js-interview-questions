const cart = ["shirt", "shoe"];
const emptyCart = [];

const createOrder = (cartItems) => {
  const orderPromise = new Promise(function (resolve, reject) {
    if (cartItems.length > 0) {
      const orderId = 123;
      setTimeout(function () {
        resolve(orderId);
      }, 2000);
    } else {
      setTimeout(function () {
        reject("order got cancelled");
      }, 2000);
    }
  });
  return orderPromise;
};

createOrder(emptyCart)
  .then(function (orderId) {
    console.log("order create with orderId", orderId);
  })
  .catch(function (err) {
    console.log(err);
  });
