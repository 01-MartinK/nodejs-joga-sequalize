const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

const models = require('../../models')

// show article by this slug
const getAuthorByIdentifier = (req, res) => {
    let name_of_key = Object.keys(req.query)[0];

    if (name_of_key === 'id') {
        models.Author.findByPk(req.query.id, {
                include: [{
                    model: models.Article
                }],
            })
            .then(author => {
                console.log(author)
                return res.status(200).json({ author });
            })
            .catch(error => {
                return res.status(500).send(error.message);
            })
    } else if (name_of_key === 'q') {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else if (req.query.q === '') {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else {
            models.Author.findOne({
                    where: {
                        name: req.query.q
                    },
                    include: [{
                        model: models.Article
                    }],
                })
                .then(author => {
                    console.log(author)
                    return res.status(200).json({ author });
                })
                .catch(error => {
                    return res.status(500).send(error.message);
                })
        }
    }
};

// export controller functions
module.exports = {
    getAuthorByIdentifier
}