const arr = [1, 2, 3, 0, 3, 0, 0, 4, 0, 0, 2, 0];

const removeDuplicates = (arr) => {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
  }
  console.log(countObj);
  console.log(Object.keys(countObj));
};

removeDuplicates(arr);

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));
