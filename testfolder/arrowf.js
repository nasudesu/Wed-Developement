let grades = [100, 50, 90, 70, 60, 80];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));

function descending(x, y) {
  return x - y;
}

const obj1 = { name: "John", age: 20, city: "New York" };
const { name, age, city } = obj1;
console.log(...obj1);
