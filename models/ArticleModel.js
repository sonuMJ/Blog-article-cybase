const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    heading: {
        required:true,
        type:String
    },
    readtime: {
        required:true,
        type:String
    },
    description: {
        required:true,
        type:String
    },
    categories: [
        {
            type:String
        }
    ],
    image: {
        required:true,
        type:String
    },
    verified: {
        required:true,
        type:Boolean
    },
    newest: {
        required:true,
        type:Boolean
    },
    trending: {
        required:true,
        type:Boolean
    },
},{
    timestamps:true
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article;