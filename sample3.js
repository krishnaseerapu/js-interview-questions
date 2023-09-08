const cart = ["shirt", "shoe"];

const createOrder = (cartItems) => {
  const orderPromise = new Promise((resolve, reject) => {
    if (cartItems.length > 0) {
      setTimeout(() => {
        const orderId = 123;
        resolve(orderId);
      }, 1000);
    } else {
      setTimeout(() => {
        reject("Order got cancelled");
      }, 1000);
    }
  });
  return orderPromise;
};

createOrder([])
  .then((orderId) => {
    console.log("Order created with orderId:", orderId);
  })
  .catch((err) => console.log(err));
