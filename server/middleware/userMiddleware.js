const middleware = {};

// Sign Up
middleware.signUp = (req, res, next) => {
    const { username, password } = req.body;
    if (username && password) throw new Error('trash username and password.')

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

// Session Authentication
middleware.verifyUser = (req, res, next) => {
    res.locals = {data: 'I am getting verified!'}
    next();
    return;
}


module.exports = middleware;