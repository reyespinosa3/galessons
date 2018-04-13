const express = require('express');
const app = express();

const comedians = [
  { id: 1, Name: "Gabriel Iglesias", video: "https://youtu.be/Pc5KfDv94Iw"},
  { id: 2, Name: "Ron White", video: "https://youtu.be/neUaSTSKFZc"},
  { id: 3, Name: "Aziz Ansari", video: "https://youtu.be/waCF81HdKAA"}
];
const videos = [
    {id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];
const camping = [
  { id: 1, name: "Emma Long Metropolitan Park", address: "1600 City Park Rd, Austin, TX 78730", url: "https://austintexas.gov/department/emma-long-metropolitan-park"},
  { id: 2, name: "McKinney Falls State Park", address: "5808 McKinney Falls Pkwy, Austin, TX 78744", url: "https://tpwd.texas.gov/state-parks/mckinney-falls"},
  { id: 3, name: "Pace Bend Park", address: "2011 Pace Bend Rd N, Spicewood, TX 78669", url: "https://parks.traviscountytx.gov/find-a-park/pace-bend"}
]


// code to post to comedian object
app.post('/', function (req, res) {
  response.send('POST request to homepage');
});

// returns list of overnight camping sites around Austin
app.get('/camping', (request, response) => {
    response.send(camping);
});
// returns list of overnight camping sites around Austin by id
app.get('/camping/:id', (request, response) => {
    response.send(camping[request.params.id - 1]);
});


// returns list of all videos
app.get('/videos', (request, response) => {
    response.send(videos);
});
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

app.listen(3000, () => {
    console.log("I am listening");
});
