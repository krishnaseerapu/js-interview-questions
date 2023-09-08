const arr = [1, 2, 3, 4, 5, 6];

const doubleTheNumber = (num) => {
  return num * 2;
};

const tripleTheNumber = (num) => {
  return num * 3;
};

console.log(arr.map((item) => doubleTheNumber(item)));
console.log(arr.map((item) => tripleTheNumber(item)));

Array.prototype.myPolyfill = function (callBackFun) {
  let outPutArr = [];
  for (let i = 0; i < this.length; i++) {
    outPutArr.push(callBackFun(this[i]));
  }
  return outPutArr;
};

console.log(arr.myPolyfill((item) => doubleTheNumber(item)));
console.log(arr.myPolyfill((item) => tripleTheNumber(item)));
