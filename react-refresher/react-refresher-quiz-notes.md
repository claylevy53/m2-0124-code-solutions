# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you define a React component?

You can define a React component by creating a JavaScript function or class that returns JSX (JavaScript XML) to describe the UI.

- How do you use JSX in a React component?

JSX is used within a React component by writing HTML-like syntax directly in JavaScript code to describe the UI elements.

- How do you declare the props a React component needs?

Props are declared by defining parameters in the component function or class constructor, or by using the propTypes property in a class-based component.

- How do you pass props to a React component?

Props are passed to a React component as attributes when the component is used in JSX. For example, <MyComponent propName={propValue} />.

- How do you include JavaScript expressions in JSX?

JavaScript expressions are included in JSX by wrapping them in curly braces {}. For example, <p>{variable}</p>.

- What are React hooks and what are the three "Rules of Hooks"?

React hooks are functions that enable functional components to use state and other React features. The three Rules of Hooks are:

Only call hooks at the top level of a function component or custom hook.
Only call hooks from React function components or custom hooks, not regular JavaScript functions.
Hooks can only be called from within React components or other custom hooks.

- How do you manage state in a React component?

State in a React component is managed using the useState hook for functional components or the setState method for class components.

- How do you handle events in React?

Events in React are handled by specifying event handlers as attributes in JSX, such as onClick, onChange, etc., which are then assigned functions to be executed when the event occurs.

- How do you let a parent component know that an event happened?

You can let a parent component know that an event happened by passing callback functions as props to child components. When the event occurs in the child component, the callback function is executed, which can then update the state or trigger other actions in the parent component.

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
