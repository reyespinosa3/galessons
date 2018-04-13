const express = require('express');
const app = express(); //app is an object

//this handles the GET request
app.get('/somedata', (request, response) => {
    console.log(request);
    response.send('here is your information');
});

app.listen(3000, () => {
  console.log("I am listening");
});
