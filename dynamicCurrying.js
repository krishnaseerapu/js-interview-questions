const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};

console.log(sum(1)(2)(3)(4)(5)(6)(7)()); // Output: 28
