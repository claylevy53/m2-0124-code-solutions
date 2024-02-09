# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

The fetch() function returns a Promise that resolves to a Response object, on this response object you can then use methods such as .json() to extract and process the data.

- What is the default request method used by `fetch()`?

The default request method used by the fetch() function is GET. When you use fetch() without explicitly specifying the request method in the options object, it will send a GET request by default.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

you can specify the request method (GET, POST, PUT, DELETE, etc.) by including it in the options object passed as the second parameter to fetch(). The method property of the options object is used for this purpose

- How does `fetch` report errors?

The fetch() function reports errors through the rejection of the Promise it returns. If an error occurs during the fetch operation, such as a network error or an invalid response from the server, the Promise will be rejected, and you can handle the error using the .catch() method

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
