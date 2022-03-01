const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

const models = require('../../models')

// show article by this slug
const getTagByIdentifier = (req, res) => {
    let name_of_key = Object.keys(req.query)[0];

    if (name_of_key === 'id') {
        if (req.query.id === '') return res.status(400).json({ 'error': 'Invalid request' });
        else {
            models.Tags.findByPk(req.query.id)
                .then(author => {
                    console.log(author)
                    return res.status(200).json({ author });
                })
                .catch(error => {
                    return res.status(500).send(error.message);
                })
        }
    } else if (name_of_key === 'q') {
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else if (req.query.q === '') {
            return res.status(400).json({ 'error': 'Invalid request' })
        } else {
            models.Tags.findOne({
                    where: {
                        name: req.query.q
                    }
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
    getTagByIdentifier
}