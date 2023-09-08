const str1 = "jest";
const str2 = "seta";

const palindrom = (str1, str2) => {
  if (str1.length === str2.length) {
    if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
      console.log("Two strings are anagrams");
    } else {
      console.log("Not anagrams");
    }
  } else {
    console.log("Not anagrams");
  }
};
palindrom(str1, str2);
