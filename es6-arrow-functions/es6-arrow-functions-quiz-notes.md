# es6-arrow-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the syntax for defining an arrow function?

First define a varible on the left of the equal sign, then on the right side of the equal sign, place any parameter, and to the right of the parameters, place the => (fat arrow symbol) and then the function body

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

When an arrow function's body is not surrounded in curly braces, the function can only return a single expression

- When using _concise body syntax_, how do you return an object literal?

You would need to wrap the object literal in parentheses ({}) to make sure it is returned as an object literal

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

() => 42 is the arrow function

- How many arguments does the arrow function take?

It does not take any arguments

- What value does it return?

it returns a Number of 42

- How many arguments are passed to the function `foo`?

None

- What type of argument is passed to the function `foo`?

None

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

(y) => {
console.log(`4y = ${4 * y}`);
});

- How many arguments does the arrow function take?

One

- What value does it return?

It logs to the console the result of 4y = ${4 \* y}

- How many arguments are passed to the function `bar`?

One

- What type of argument is passed to the function `bar`?

A numeric argument

- When does the arrow function's code get executed?

When the bar() function is called

- How does the value of `this` differ between standard functions and arrow functions?

the key difference is that arrow functions do not have their own this binding and instead capture the value of this from the surrounding context where they are defined, while standard functions have dynamic this binding based on how they are called

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
