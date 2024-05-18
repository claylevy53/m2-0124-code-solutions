# node-module-system-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a JavaScript module?

A module in JavaScript is just a file containing related code. The import and export keywords are used to share and receive functionalities respectively across different modules.

- What are the advantages of modular programming?

Code is divided into smaller, manageable modules, making it easier to understand, maintain, and modify. Each module focuses on a specific task, promoting code organization and readability. Also Reusability, Scalability, Maintenance.

- In JavaScript, how do you make a function in a module available to other modules?

// module.js
export function myFunction() {
// Function implementation
}

// anotherModule.js
import { myFunction } from './module.js';

// Now you can use myFunction
myFunction();

- In JavaScript, how do you use a function from another module?

// Importing a single function from another module
import { functionName } from './anotherModule';

// Using the imported function
functionName();

// Alternatively, you can import all functions from another module at once
import \* as anotherModule from './anotherModule';

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
