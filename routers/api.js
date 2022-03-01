const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/articles');
const apiAuthorController = require('../controllers/api/authors');
const apiTagController = require('../controllers/api/tags');

router.get('/article', apiArticleController.getArticleByIdentifier);
router.get('/author', apiAuthorController.getAuthorByIdentifier);
router.get('/tags', apiTagController.getTagByIdentifier)

module.exports = router;