let numbers = [6, 9, 2, 5, 6, 9, 8];

let students = [
  { name: "Sardor", age: 17 },
  { name: "Shamsiddin", age: 16 },
  { name: "Shoqosim", age: 20 },
  { name: "Sarvar", age: 28 },
  { name: "Ibrohim", age: 22 },
  { name: "Abdulaziz", age: 45 },
  { name: "Abdurahmon", age: 30 },
];

let sum = 0;
students.forEach((el, i, arr) => {
  if (el.age >= 18) {
    sum += el.age;
  }
});
console.log(sum);

// foreachni vazifasi mavjud arrayni ittarion qiladi o'z ichida function qabul qiladi

// let sum = 0;
// let sum = 0;
// numbers.forEach((el, i, arr) => {
//   if (el % 2 == 1) {
//     sum += el;
//   }
// });
// console.log(sum);
