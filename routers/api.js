const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/articles');
const apiAuthorController = require('../controllers/api/authors');

router.get('/article', apiArticleController.getArticleByIdentifier);
router.get('/author', apiAuthorController.getAuthorByIdentifier);


module.exports = router;