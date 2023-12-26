const express = require("express");
const router = express.Router();
const { body, query, validationResult } = require('express-validator');
const Controllers = require('../Controllers/Controllers');
const Middleware = require('../Middleware/Middlewares');

// Route for fetching all users
router.route('/').get(Controllers.users);

// Route for fetching a specific user by ID
router.get('/:userId', Controllers.userId);

// Route for storing a new user
router.post('/store', Controllers.store);

// The following code is commented out and seems to be related to validation:
// Uncomment and modify as needed for your specific use case.

// router.post('/api/validator', [body('name').notEmpty().isLength({min: 5})], (req, res) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//         return res.send(`Hello, ${req.body.person}!`);
//     } else {
//         return res.send(result);
//     }

//     const body = req.body;
//     res.send(body);
// });

// router.get('/hello', query('person').notEmpty(), (req, res) => {
//     const result = validationResult(req);
//     if (result.isEmpty()) {
//         return res.send(`Hello, ${req.query.person}!`);
//     }

//     res.send({ errors: result.array() });
// });

module.exports = router;
