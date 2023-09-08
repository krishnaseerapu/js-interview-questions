const arr = [{ name: "jayakrishna", hobbies: ["a", "b"] }, 2, 3, 4];

const deepCopy = (arr) => {
  const newArr = JSON.parse(JSON.stringify(arr));
  return newArr;
};

const arr2 = deepCopy(arr);

arr.push(5);

console.log(arr, arr2);
