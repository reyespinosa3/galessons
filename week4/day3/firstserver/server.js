const express = require('express');
const app = express();

const comedians = [
  { id: 1, Name: "Gabriel Iglesias", video: "Link to a Fluffy video"},
  { id: 2, Name: "Ron White", video: "Link to a Ron White video"},
  { id: 3, Name: "Aziz Ansari", video: "Link to a Aziz Ansari video"}
];
const videos = [
    {id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];

// code to post to comedian object
app.post('/', function (req, res) {
  response.send('POST request to homepage');
});

// returns list of all videos
// app.get('/videos', (request, response) => {
//     response.send({title: videos.title, url: videos.url});
// });
// returns video by id number
app.get('/videos/:id', (request, response) => {
    let title = videos[request.params.id - 1].title;
    response.send(title);
});

// returns list of all comedians
app.get('/comedians', (request, response) => {
    response.send(comedians);
});

// returns comedian by id number
app.get('/comedians/:id', (request, response) => {
    let id = comedians[request.params.id -1];
    response.send(id);
});

// returns video by comedian id number
app.get('/comedians/:id/videos', (request, response) => {
    let comedyvid = comedians[request.params.id -1].video;
    response.send(comedyvid);
});
app.get('/comedians/:id/videos/:id', (request, response) => {
    response.send('video by comedian');
});
app.listen(3000, () => {
    console.log("I am listening");
});
