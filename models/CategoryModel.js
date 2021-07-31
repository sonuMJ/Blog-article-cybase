const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category: {
        required:true,
        type:String
    }
},{
    timestamps:true
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category;