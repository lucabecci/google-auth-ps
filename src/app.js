const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('dotenv/config')
require('./googleStrategy');

app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 60*60*60
  }))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/google.routes'))
app.use('/', require('./routes/index.routes'))

app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}!`))