const str = "searBoxInput";

const addUnderScore = (str) => {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += "_" + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(addUnderScore(str));
