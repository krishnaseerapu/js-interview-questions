const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 9;

const sumTarget = (arr, target) => {
  const targetArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        targetArr.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(targetArr);
};
sumTarget(arr, target);
