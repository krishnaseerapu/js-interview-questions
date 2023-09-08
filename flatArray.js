const nestedArray = [1, [2, [3, 4], 5], 6];
const newArr = [];
const flatTheArry = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatTheArry(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
};

flatTheArry(nestedArray);
console.log(newArr);
