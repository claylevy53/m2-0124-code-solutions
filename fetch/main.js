// main.ts

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    return response.json();
  })
  .then((users) => {
    console.log(users);
  });

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
    if (!response.ok) {
      console.log('Network response was not ok');
    }
    return response.json();
  })
  .then((pokemon) => {
    console.log(pokemon);
  });
