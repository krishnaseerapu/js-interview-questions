const arr = [1, 2, 3, 4, 5];

const sum = (a, b) => {
  return a + b;
};

console.log(arr.reduce((acc, cur) => sum(acc, cur), 0));

Array.prototype.myReducer = function (callBackFun, initialValue = null) {
  let accumulator = initialValue || null;
  for (let i = 0; i < this.length; i++) {
    accumulator = callBackFun(this[i], accumulator);
  }
  return accumulator;
};

console.log(arr.myReducer((acc, curr) => sum(acc, curr), 5));
