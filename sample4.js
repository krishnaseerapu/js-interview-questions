const names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

const removeDuplicates = (names) => {
  //   const arr = names.filter((element, index) => {
  //     return names.indexOf(element) === index;
  //   });
  //   console.log(arr);

  const uniqueArr = [...new Set(names)];
  console.log(uniqueArr);
};

removeDuplicates(names);
