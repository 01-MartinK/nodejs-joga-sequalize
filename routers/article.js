const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleAdminController = require('../controllers/admin/article')
const apiController = require('../controllers/api/articles');
// getters
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

// posters
router.post('/admin/article/create', articleAdminController.createArticle);
router.post('/admin/article/delete/:id', articleAdminController.deleteArticle);
router.post('/admin/article/update/:id', articleAdminController.updateArticle);

module.exports = router;