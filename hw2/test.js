function isArray(variable) {
  return Array.isArray(variable);
}

console.log(isArray([1, 2, 3]));
console.log(isArray("hello"));

function getFirstElement(arr) {
  return arr[0];
}

const colors = ["Blue", "Green", "Red"];
console.log(getFirstElement(colors));

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement(colors));

const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const o = ["th", "st", "nd", "rd"];

color.forEach((c, index) => {
  const suffix = index + 1 <= 3 ? o[index + 1] : o[0];
  console.log(`${index + 1}${suffix} choice is ${c.trim()}.`);
});

const student = {
  name: "Giorgi",
  surname: "Kvirikashvili",
  age: 21,
};

student.faculty = "Engineering";

delete student.age;

student.name = "Nino";

console.log(student);
