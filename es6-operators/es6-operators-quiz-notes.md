# es6-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

The && (Logical AND) can be used outside of an if statement by checking if a variable to the left of the && is Boolean true, if it is then it can preform some action.

The || (Logical OR) can be used outside of an if statement by checking if a variable to the left of the || is Boolean true, then it will return true. If it is false it will return anything placed to the right of the Logical OR

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

The evaluation of an expression stops as soon as the outcome can be determined without evaluating the entire expression

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

The nullish coalescing operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, not comparing if a operand if it is true or false

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

The ternary operator check to see if the operant to the left of the (?) is true or false, and then returns an expressions if true : or and expressions if it is false

- What is the `?.` (optional chaining) operator? When would you use it?

The optional chaining operator allows accessing or properties / methods of objects that may be undefined or null. It is useful when you access a property or method that in not defined yet but you still want to run the code without an error spitting out

- What is `...` (spread) syntax? How do you use it with arrays and objects?

The spread synatx allows you to break an array or object into indivual elements or properties, it is a great tool for manipulating arrays / objects

- What data types can be spread into an array? Into an object?

data types that can be spread into arrays include other arrays / strings

data types that can be spread into objects, include other objects, and arrays

- How does spread syntax differ from rest syntax?

Rest syntax is typically used in function parameters (e.g., function sum(...numbers)), and it can also be used in destructuring (e.g., [first, second, ...rest]).

Spread syntax is typically used as a prefix to an iterable (e.g., ...array, ...string, ...object).

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
