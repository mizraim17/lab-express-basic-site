const express = require('express');
const app =express();

app.use(express.static('public'));



// home Route
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-home.html');
});

// cat route:
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
});
// about route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-about.html');
});
// carrousel route:
app.get('/carrousel', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-carrousel.html');
});

app.use((request,response) => {
    response.sendStatus(404);
    response.send('pucho');
});

app.listen(3000, () => {
    console.log('My primer app listening on port 3000!')
});