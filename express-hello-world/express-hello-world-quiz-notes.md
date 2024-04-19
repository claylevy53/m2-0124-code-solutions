# express-hello-world-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is Express middleware?

Express middleware is a function that has access to the request, response, and the next middleware function in the application's request-response cycle

- What is Express middleware useful for?

Express middleware is useful for tasks such as parsing request bodies, logging, authentication, error handling, and more

- How do you mount a middleware with an Express application?

Middleware is mounted using the use() method of an Express application, specifying the middleware function as an argument

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

An Express application passes the request and response objects to middleware functions to manage the request/response lifecycle of the server. Additionally, it also passes the next function to control the flow of middleware execution

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
