const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In Order:');
values.forEach((element) => console.log(element));

console.log('Reverse:');
let currentIndex = values.length;
values.forEach((element) => {
  currentIndex--;
  console.log(values[currentIndex]);
});
