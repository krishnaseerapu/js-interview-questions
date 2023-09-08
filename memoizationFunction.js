const cache = {};

const sumOfWholeNumbers = (num) => {
  if (cache[num]) {
    console.log("cache used");
    return cache[num];
  } else {
    console.log("cache not used");
    const sum = (num * (num + 1)) / 2;
    cache[num] = sum;
    return sum;
  }
};
console.log(sumOfWholeNumbers(7));
console.log(sumOfWholeNumbers(7));
