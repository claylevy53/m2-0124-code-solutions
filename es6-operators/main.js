/* eslint-disable no-unused-vars */

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');

let config1 = v1 || 'default-value';
let config2 = v2 || 'default-value';

console.log('Logical OR 1:', config1);
console.log('Logical OR 2:', config2);

const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';

console.log('Nullish Operator 1: ', cfg1);
console.log('Nullish Operator 2: ', cfg2);
console.log('Nullish Operator 3: ', cfg3);

let tern1 = v1 ? 'truthy' : 'falsy';
let tern2 = v2 ? 'truthy' : 'falsy';

console.log('Conditional Ternary 1:', tern1);
console.log('Conditional Ternary 2:', tern2);

let oc1 = v1?.value;
let oc2 = v5?.details?.address?.city;
console.log('Optional Chaining 1:', oc1);
console.log('Optional Chaining 2:', oc2);

let sObj = { ...v1, foo: 'bar' };
console.log('Spread Object', sObj);

let sArr = [100, ...v4];

console.log('Spread Array:', sArr);
