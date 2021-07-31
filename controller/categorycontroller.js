const Category = require('../models/CategoryModel')

exports.ListAllCategory = (req,res) => {
    Category.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}