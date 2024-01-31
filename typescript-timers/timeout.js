function helloTimeout() {
  const text = document.querySelector('.message');
  text.innerHTML = 'Hello There';
}

setTimeout(helloTimeout, 2000);
