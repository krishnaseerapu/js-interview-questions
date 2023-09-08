const arr = [1, 2, 3, 0, 3, 0, 0, 4, 0, 0, 2, 0];

const moveZerosToEnd = (arr) => {
  const countZeros = arr.filter((item) => item === 0);
  const removeZerosArr = arr.filter((item) => item !== 0);
  console.log([...removeZerosArr, ...countZeros]);
};

moveZerosToEnd(arr);
