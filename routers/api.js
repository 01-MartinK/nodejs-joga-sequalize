const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/articles');

router.get('/article', apiArticleController.getArticleByIdentifier);

module.exports = router;
