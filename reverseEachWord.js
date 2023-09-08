const str = "Welcome to this Javascript Guide!";

const arr = str.split(" ").map((item) => {
  return item.split("").reverse().join("");
});

console.log(arr.join(" "));
