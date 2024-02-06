# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

A client in terms of http requests, is who request for information/services/data from a server

- What is a server?

A server in terms of http requests is the place where the client goes to to get this information/services/data, a server provides information to a client when requested

- Which HTTP method does a browser issue to a web server when you visit a URL?

When you visit a URL in a web browser, the browser typically issues an HTTP GET request to the web server.

- What three things are on the start-line of an HTTP **request** message?

  1.The request method (GET/POST/PUT/DELETE...ETC)
  2.The Uniform Resource Identifier (URI) or Uniform Resource Locator (URL) i.e https://example.com/
  3.HTTP Version

- What three things are on the start-line of an HTTP **response** message?

  1.HTTP Version HTTP/1.0" and "HTTP/1.1.
  2.Status Code (200/404/500/...ETC)
  3.Reason Phrase

- What are HTTP headers?

HTTP headers are key-value pairs of metadata that provide additional information about an HTTP request or response

- Where would you go if you wanted to learn more about a specific HTTP Header?

You could go to the official documentation on HTML headers on the MDN page

- Is a body required for a valid HTTP request or response message?

No, a body is not required for a valid HTTP request or response message. Whether a body is included in an HTTP message depends on the specific HTTP method being used, the nature of the request or response, and the requirements of the operation

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
