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
  if (false) {
    setTimeout(() => {
      resolve("Promise2 resolved");
    }, 500);
  } else {
    setTimeout(() => {
      reject("Promise2 rejected");
    }, 500);
  }
});

Promise.all([promise1, promise2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
