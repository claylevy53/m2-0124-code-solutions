const ExampleConstructor = function () {};
console.log('ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeOf prototype:', typeof ExampleConstructor.prototype);

const test = new ExampleConstructor();

console.log('New Constructor Object:', test);

const instanceOf = test instanceof ExampleConstructor;

console.log('Is an instanceOf:', instanceOf);
