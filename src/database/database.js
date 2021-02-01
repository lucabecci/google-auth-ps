const mongoose = require('mongoose')

async function dbConnection(){
    try {
        await mongoose.connect('mongodb://localhost:27017/google', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB is connected')
    }
    catch(e){
        console.log(e)
    }
}

module.exports = dbConnection