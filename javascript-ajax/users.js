const users = document.getElementById('user-list');

const XMLRequest = new XMLHttpRequest();
XMLRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
XMLRequest.responseType = 'json';
XMLRequest.addEventListener('load', () => {
  console.log(XMLRequest.status);
  console.log(XMLRequest.response);

  for (let i = 0; i < XMLRequest.response.length; i++) {
    const li = document.createElement('li');
    li.textContent = XMLRequest.response[i].name;
    users.appendChild(li);
  }
});
XMLRequest.send();
