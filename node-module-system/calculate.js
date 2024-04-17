import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1 = parseInt(process.argv[2]);
const operation = process.argv[3];
const num2 = parseInt(process.argv[4]);

if (operation === 'plus') {
  console.log(add(num1, num2));
} else if (operation === 'minus') {
  console.log(subtract(num1, num2));
} else if (operation === 'times') {
  console.log(multiply(num1, num2));
} else if (operation === 'over') {
  console.log(divide(num1, num2));
}
