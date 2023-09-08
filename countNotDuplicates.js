const duplicateArray = [1, 1, 3, 4, 4, 5, 6, 6, 7];

const countNotDuplicates = (arr) => {
  const arrObj = {};
  for (let i = 0; i < arr.length; i++) {
    arrObj[arr[i]] = (arrObj[arr[i]] || 0) + 1;
  }
  console.log(arrObj);
  console.log(Object.keys(arrObj).filter((item) => arrObj[item] === 1).length);
};

countNotDuplicates(duplicateArray);
