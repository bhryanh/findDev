const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://bhryan:perpetuo96@cluster0-6fa7o.mongodb.net/finddev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(33333);