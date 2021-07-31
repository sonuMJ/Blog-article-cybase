const mongoose = require('mongoose');

const URL  = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.sowwj.mongodb.net/blog?retryWrites=true&w=majority`;

let dbconnection = mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports = dbconnection;