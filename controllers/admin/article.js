const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        // create article
        name: name,
        slug: slug,
        image: image,
        body: body,

        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({message: 'New article is added'});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
};

const updateArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    models.Article.update({
        // create article
        name: name,
        slug: slug,
        image: image,
        body: body,

    },
    {where: { id: req.params.id}})
    .then(article => {
        console.log(article)
        return res.status(200).json({message: 'New article is added'});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
};

const deleteArticle = (req, res) => {
	// get form data

	models.Article.destroy({ where: { id: req.params.id } })
	.then(article => {
		console.log(article)
		return res.status(200).json({ message: 'Article is deleted' });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
}

module.exports = {
    createArticle,
    deleteArticle,
    updateArticle
};