const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Promise1 resolved");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("Promise1 rejected");
    }, 1000);
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved");
  }, 1000);

  setTimeout(() => {
    reject("Promise2 rejected");
  }, 2000);
});
Promise.any([promise1, promise2])
  .then((result) => {
    // The first promise to resolve
    console.log(result);
  })
  .catch((errors) => {
    // All promises are rejected
    console.error(errors);
  });
