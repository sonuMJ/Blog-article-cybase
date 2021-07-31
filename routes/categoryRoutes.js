const express = require("express")
const router = express.Router();
const categoryController = require('../controller/categorycontroller')

/**
 * @method GET
 * @description listing of all articles
 * 
 */
router.get("/listall", categoryController.ListAllCategory);


module.exports = router;