const express = require('express');
const router = express.Router();
const userFunctions = require('../middleware/userMiddleware');

router.post(
    '/signup', 
    userFunctions.hashInfo,
    userFunctions.signUp, 
    (req, res) => {return res.status(200).json(res.locals);}
    )

router.get('/login', userFunctions.logIn, (req, res) => {
    res.status(200).json(res.locals);
    return;   
})

router.get('/verify', userFunctions.verifyUser, (req, res) => {
    res.status(200).json(res.locals);
    return;  
})

module.exports = router;
