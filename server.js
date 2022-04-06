const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:778Iv23N@localhost:3306/joga_sequelize');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    })


const authorRouter = require('./routers/author');
const articleRouter = require('./routers/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);
app.use('/author', authorRouter);
app.use('admin/article', articleRouter);

const apiRouter = require('./routers/api');
app.use('/api', apiRouter)

app.get('/app/user', (req, res) => {
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;

    res.send({
        'user_id': user_id,
        'token': token,
        'geo': geo
    })
});

app.listen(3000, () => {
    console.log('Server running at localhost:3000');
});