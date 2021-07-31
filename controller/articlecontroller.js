const Article = require('../models/ArticleModel')

exports.ListAllArticle = (req,res) => {
    Article.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}
exports.ListArticlebyOneCategory = (req,res) => {
    let category = req.params.category;
    if(!category){
        res.status(400).send({
            "message" : "category can't be empty"
        })
    }
    Article.find({categories: category})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}
exports.ListArticlebyCategory = (req,res) => {
    let category = req.body;
    console.log(category.categories);
    if(!category){
        res.status(400).send({
            "message" : "category can't be empty"
        })
    }
    Article.find({categories: { $in : category.categories}})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}
exports.AddArticle = (req,res) => {
    if(!req.body){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }
    console.log(req.body);
    const article = new Article({
        heading:req.body.heading,
        readtime:req.body.readtime,
        description:req.body.description,
        categories:req.body.categories,
        image:req.body.image,
        verified:req.body.verified,
        newest:req.body.newest,
        trending:req.body.trending,
    })
    article.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}
exports.updateArticle = (req,res) => {
    let id = req.params.id;
    if(!req.body || !id){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }

    Article.findByIdAndUpdate(id,{
        heading:req.body.heading,
        readtime:req.body.readtime,
        description:req.body.description,
        categories:req.body.categories,
        image:req.body.image,
        verified:req.body.verified,
        newest:req.body.newest,
        trending:req.body.trending,
    },
    {
        new:true
    })
    .then(data => {
        if(!data){
            return res.json(404).json({message:"Article not found with " + id})
        }
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}
exports.deleteArticle = (req,res) => {
    let id = req.params.id;
    if(!id){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }

    Article.findByIdAndRemove(id)
    .then(data => {
        if(!data){
            return res.json(404).json({message:"Article not found with " + id})
        }
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}