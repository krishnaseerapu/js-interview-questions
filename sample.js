const arr1 = [2, 4, 5, 6, 7];
const arr2 = [1, 3, 4];
//out put: [3,7,9,6,7]

const sumTwoArrays = (arr1, arr2) => {
  const sum = [];
  let tempArr1 = [];
  let tempArr2 = [];
  if (arr1.length >= arr2.length) {
    tempArr1 = arr1;
    tempArr2 = arr2;
  } else {
    tempArr1 = arr2;
    tempArr2 = arr1;
  }
  tempArr1.forEach((element, index) => {
    sum.push(tempArr1[index] + (tempArr2[index] || 0));
  });
  console.log(sum);
};
sumTwoArrays(arr1, arr2);
