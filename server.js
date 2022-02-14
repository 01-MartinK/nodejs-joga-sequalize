const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to sesuelize application" });
});

app.listen(3000, () => {
    console.log('Server running at localhost:3000');
});