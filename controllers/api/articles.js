const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

const models = require('../../models')

const getAllArticles = (req, res) => {
    models.Article.findAll()
        .then(articles => {
            console.log(articles)
            return res.status(200).json({ articles });
        })
        .catch(error => {
            return res.status(500).send(error.message);
        })
}

const getArticleByIdentifier = (req, res) => {
    let name_of_key = Object.keys(req.query)[0];


    if (name_of_key === 'slug') {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else if (req.query.slug === '') {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else {
            models.Article.findOne({
                    where: {
                        slug: req.query.slug
                    },
                    include: [{
                            model: models.Author
                        },

                        {
                            model: models.Tags,
                            through: {
                                model: models.ArticleTags
                            }
                        }

                    ],
                })
                .then(article => {
                    console.log(article)
                    return res.status(200).json({ article });
                })
                .catch(error => {
                    return res.status(500).send(error.message);
                })
        }
    } else if (name_of_key === 'id') {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else if (req.query.id === '') {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else {
            models.Article.findOne({
                    where: {
                        id: req.query.id
                    },
                    include: [{
                            model: models.Author
                        },

                        {
                            model: models.Tags,
                            through: {
                                model: models.ArticleTags
                            }
                        }

                    ],
                })
                .then(article => {
                    console.log(article)
                    return res.status(200).json({ article });
                })
                .catch(error => {
                    return res.status(500).send(error.message);
                })
        }
    }
}

module.exports = {
    getAllArticles,
    getArticleByIdentifier
}