# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Hooks are functions that let you use state and other React features in functional components without writing a class.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

They're guidelines for using hooks correctly in React, ensuring they're called only at the top level of your React function, not inside loops, conditions, or nested functions.

- What is the purpose of state in React?

State allows components to manage their own data, enabling them to update and re-render based on changes to that data.

- Why can't we just maintain state in a local variable?

Local variables are not preserved between renders in React, whereas state variables managed by React are.

- What two actions happen when you call a `state setter` function?

When you call a state setter function in React, it updates the state value and triggers a re-render of the component.

- When does the local `state variable` get updated with the new value?

The local state variable gets updated with the new value during the next render cycle after calling the state setter function.

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
