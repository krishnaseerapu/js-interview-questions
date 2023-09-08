let counter = 0;

const getData = () => {
  console.log("fetching the data", counter++);
};

const debounce = (func) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, 300);
  };
};

const debounceFunc = debounce(getData, 300);
