
const bcrypt = require('bcryptjs');

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
    // invoke hash helper here with req.body passed in
    res.locals.hashedUsername = hashedUsername;
    res.locals.hashedPassword = hashedPassword;
    return next();
}

// Session Authentication
middleware.verifyUser = (req, res, next) => {
    res.locals = {data: 'I am getting verified!'}
    next();
    return;
}

// a helper function
middleware.hashHelper = async (obj) => {
    const { username, password } = obj;
    const hashedUsername = await bcrypt.hash(username, 5);
    const hashedPassword = await bcrypt.hash(password, 5);
    return {username: hashedUsername, password: hashedPassword}
}

module.exports = middleware;