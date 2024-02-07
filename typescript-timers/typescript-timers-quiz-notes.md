# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?

A call function is a function you can insert into another function to be used at a later time, inorder to control timing or other factors to when you want to use that specific function.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

You could use the setTimeout() function and input a callback function and the time in milliseconds until you want that piece of code executed

- How can you set up a function to be called repeatedly without using a loop?

You could use the setInterval() function, which will run the callback function continuously until this setInterval() function is halted

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

0 milliseconds, no delay

- What do `setTimeout()` and `setInterval()` return?

These function both return a unique identifier that can be used to stop these functions by using clearInterval() function

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
