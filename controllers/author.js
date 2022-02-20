const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

const Author = require('../models/author')(sequelize, Sequelize.DataTypes);

const getAuthorWithArticles = (req, res) => {
    Author.findOne({
        where: {
            id: req.params.id
        } 
    })
    .then(author => {
        console.log(author)
        return res.status(200).json({ author});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
} 

module.exports = {
    getAuthorWithArticles
} ;