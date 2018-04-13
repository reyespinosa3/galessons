const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! I am being hosted on a server!'))
app.get('/puppies', (req, res) => res.send('Let me out, I need to P!'))
app.get('/kittens', (req, res) => res.send('Keep that puppy away from me!'))
app.get('/animals', (req, res) => res.send('Where the heck is Noah and his ark!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
