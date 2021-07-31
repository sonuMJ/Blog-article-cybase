const express = require("express")
const router = express.Router();
const articleController = require('../controller/articlecontroller')

/**
 * @method GET
 * @description listing of all articles
 * 
 */
router.get("/listall", articleController.ListAllArticle);
/**
 * @method GET
 * @description listing of articles based on a category
 * 
 */
router.get("/list/:category", articleController.ListArticlebyOneCategory);

/**
 * @method POST
 * @description listing of articles based on multiple category
 * JSON => {"categories":["comedy","thriller"]}
 * 
 */
 router.post("/list", articleController.ListArticlebyCategory);

/**
 * @method POST
 * @description edit an article
 */
router.post("/add", articleController.AddArticle);
/**
 * @method PUT
 * @description edit an article
 * @param ArticleID
 * @param Body 
 * 
 */
router.put("/update/:id", articleController.updateArticle);
/**
 * @method DELETE
 * @description remove an article from the database.
 * @param ArticleID
 * 
 */
router.delete("/delete/:id", articleController.deleteArticle);

module.exports = router;