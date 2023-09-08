const str = "jjsdyssldldds";

const foundMaxNumber = (str) => {
  const characterOccurObj = {};
  for (let i = 0; i < str.length; i++) {
    characterOccurObj[str[i]] = (characterOccurObj[str[i]] || 0) + 1;
  }
  console.log(characterOccurObj);
  const maxNumber = Math.max(...Object.values(characterOccurObj).sort());
  const filterArray = Object.keys(characterOccurObj).filter(
    (item) => characterOccurObj[item] === maxNumber
  );
  console.log(filterArray);
};

foundMaxNumber(str);
