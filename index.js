const express = require('express');
const app = express()
const port = 5000 ;
const hostname= '127.0.0.1';
const { body , query, validationResult } = require('express-validator');


app.use(express.json())


app.get('/api/users', (req, res) => {
res.send('ur F API Use Node.js - express');
});

app.get('/api/users/:userId', (req, res) => {
const userId = req.params.userId;
res.send(userId);
});

app.post('/api/users/store', (req, res) =>{
const body = req.body;
res.send(body);
})

app.post('/api/validator',[body('name').notEmpty().isLength({min:5})], (req, res) =>{
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body.person}!`);
    }else{
        return res.send(result);
    }

    const body = req.body;
    res.send(body);
})

app.get('/hello', query('person').notEmpty(), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.query.person}!`);
    }
  
    res.send({ errors: result.array() });
});



// listen is function to run server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});