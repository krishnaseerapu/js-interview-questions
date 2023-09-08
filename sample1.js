const arr = [1, 2, 3, 5, 6, 7];

const findMissingNumber = (arr) => {
  const highNumber = Math.max(...arr);
  const sum = (highNumber * (highNumber + 1)) / 2;
  const originalSum = arr.reduce((cur, acc) => {
    return cur + acc;
  }, 0);
  console.log(sum - originalSum);
};

findMissingNumber(arr);
