const fetch = require('node-fetch');
const data = fetch('https://jsonplaceholder.typicode.com/todos/');
data.then((response) => response.json()).then((final) => console.log(final[Math.floor(Math.random() * 100)]));
// console.log('me first');