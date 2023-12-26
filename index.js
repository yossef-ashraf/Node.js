const express = require('express');
const app = express()
const port = 5000 ;
const hostname= '127.0.0.1';
const Routers = require('./Routes/Routes');

app.use(express.json());

app.use('/api/users',Routers);

// listen is function to run server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});