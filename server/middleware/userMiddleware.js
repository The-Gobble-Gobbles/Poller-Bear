const fs = require('fs')
const bcrypt = require('bcryptjs');
const path = require('path');


const middleware = {};

// Sign Up
middleware.signUp = (req, res, next) => {
    console.log('Made it to signUp middleware!');

    const { username, password } = req.body;
    if (!username || !password) return next({log: 'trash username and password.'})
    try {
        if (req.body.username && req.body.password) {
            res.locals = {data: 'I am signing up!'}
            return next();
        }
    } catch (error) {
        return next({log: 'Error at sign up', message: {err: error}})
    }
}
// Log In
middleware.logIn = (req, res, next) => {
    res.locals = {data: 'I am logging in!'}
    next();
    return;
}

middleware.hashInfo = async (req, res, next) => {
    const hashedObj = middleware.hashHelper(req.body);
    const { hashedUsername, hashedPassword } = hashedObj;

    console.log('hashed?');

    // invoke sendHashToDB()
    await middleware.sendHashToDB()

    // invoke hash helper here with req.body passed in
    res.locals.hashedUsername = hashedUsername;
    res.locals.hashedPassword = hashedPassword;

    // send data to a database (insert via sql or etc)

    return next();
}

// Session Authentication
middleware.verifyUser = (req, res, next) => {
    res.locals = {data: 'I am getting verified!'}
    next();
    return;
}

// helper functions
middleware.hashHelper = async (obj) => {
    const { username, password } = obj;
    const hashedUsername = await bcrypt.hash(username, 5);
    const hashedPassword = await bcrypt.hash(password, 5);
    return {username: hashedUsername, password: hashedPassword}
}

middleware.sendHashToDB = async (obj) => {
    console.log('sent hash to db!');
    // write to the dbtester.js file

    // await fs.appendFile(
    //     path.resolve(__dirname, '../db/dbtester.js'),
    //     "'Hello database from James and Corey'\n",
    //      (err) => {
    //         if (err) console.log(err);
    //     }
    // )

    const turkeyGobble = "'Hello database from James and Corey'";
    // const fileData = 
    //     JSON.parse(await fs.readFile(
    //         path.resolve(__dirname, '../db/dbtester.js')),
    //         'utf8', 
    //         err => {
    //             if (err) console.log(err)
    //         });
    
    let parsed;

    const preParsedData = await fs.readFile(
        path.resolve(__dirname, '../db/dbtester.js'),
        {encoding: 'utf-8'},
        (err, data) => {
            if (err) {
                console.log('error', err)
            }
            parsed = JSON.parse(data)
        });

    console.log('preParsedData is: ', parsed);
        

    const fileData = parsed;

    fileData.push(turkeyGobble);
    
    await fs.writeFile(
        path.resolve(__dirname, '../db/dbtester.js'), 
        JSON.stringify(fileData, null, 2),
        err => {
            if (err) console.log(err)
        });
    // read the file we want
    // convert the contents to a JSON
    // writeFile 
}

module.exports = middleware;