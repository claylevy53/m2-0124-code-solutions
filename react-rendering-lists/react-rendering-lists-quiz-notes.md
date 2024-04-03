# react-rendering-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?

We would want to dynamically create a list of React components when we have a collection of data and want to render a component for each item in that data dynamically

- Why is it important for React components to be data-driven?

It's important for React components to be data-driven because it allows for reusable and scalable code.

- Where in the component code would a list of React components typically be built?

A list of React components is typically built inside the render method of a component, using JSX syntax to map over an array and render each component dynamically

- What `Array` method is commonly used to create a list of React components?

The map method is commonly used to create a list of React components

- Why do components in a list need to have unique keys?

Components in a list need to have unique keys to help React identify which items have changed, added, or removed efficiently during updates

- What is the best value to use as a "key" prop when rendering lists?

The best value to use as a "key" prop when rendering lists is a unique identifier associated with each item in the list, such as an ID from the data source

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
