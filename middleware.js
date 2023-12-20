const express = require('express');
const app = express();


 app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  });

  app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  });


  app.get('/user/:id', (req, res, next) => {
    res.send('USER')
  }); 

  function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  const logStuff = [logOriginalUrl, logMethod]
  app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('User Info')
  })