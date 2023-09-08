const user = {
  firstName: "jayakrishna",
  lastName: "seerapu",
};

const printName = function (city, street) {
  console.log(
    this.firstName + " " + this.lastName + " city " + city + " street " + street
  );
};

const printMyName = printName.bind(user, "salur");
printMyName("konki street");

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printNewBindName = printName.myBind(user, "vizag");
printNewBindName("konki street");
