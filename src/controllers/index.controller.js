const index = {}

index.home = (req, res) => {
    res.send('Auth Google Test!')
}

index.failed = (req, res) => {
    res.send('Error to login!')
}

index.welcome = (req, res) => {
    res.send(`Welcome  ${req.user.displayName}!`)
}

index.logout = (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}

module.exports = index