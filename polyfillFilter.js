const arr = [1, 2, 3, 4, 5, 6];

const evenNumber = (num) => {
  if (num % 2 === 0) {
    return num;
  }
};

console.log(arr.filter((item) => evenNumber(item)));

Array.prototype.myFilter = function (callBackFun) {
  let outPutArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFun(this[i])) {
      outPutArr.push(this[i]);
    }
  }
  return outPutArr;
};
console.log(arr.myFilter((item) => evenNumber(item)));
