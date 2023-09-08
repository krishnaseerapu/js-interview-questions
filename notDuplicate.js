const arr = [3, 2, 4, 5, 1, 2, 3];

const sortArray = (arr) => {
  let sortedArray;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        sortedArray = arr[i];
        arr[i] = arr[j];
        arr[j] = sortedArray;
      }
    }
  }
  console.log(arr);
};

sortArray(arr);

// const arr = [3, 2, 4, 5, 1, 2, 3];

// const sortArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// };

// sortArray(arr);
// console.log(arr);
