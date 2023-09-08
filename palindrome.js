const str = "mom";

const findPalindrome = (str) => {
  const reveredString = str.split("").reverse().join("");
  if (str === reveredString) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
};
findPalindrome(str);
