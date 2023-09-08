// function employeeDetails(msg1, msg2) {
//   console.log(msg1 + " " + this.firstName + " " + msg2 + this.lastName);
// }

// const arrEmpDetails = (msg1, msg2) => {
//   console.log(msg1 + " " + this.firstName + " " + msg2 + this.lastName);
// };

// const emp = {
//   firstName: "jaya",
//   lastName: "krishna",
// };

// arrEmpDetails.call(emp, "hi", "hello");

// employeeDetails.call(emp, "hi", "how are you");
// employeeDetails.apply(emp, ["hi", "how are you"]);

// const bindExample = employeeDetails.bind(emp);
// bindExample("hi", "how are you ther");

const arrEmpDetails = (msg1, msg2) => {
  console.log(msg1 + " " + emp.firstName + " " + msg2 + this.lastName);
};

const emp = {
  firstName: "jaya",
  lastName: "krishna",
};

arrEmpDetails.call(emp, "hi", "hello");
