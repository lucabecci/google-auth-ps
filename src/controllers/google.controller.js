const google = {}

google.success = (req, res) => {
    res.redirect('/welcome');
}

module.exports = google