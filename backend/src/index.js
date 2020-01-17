const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const http = require('http');
const { setupWebsocket } = require('./websocket');
const cors = require('cors');

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect('mongodb+srv://bhryan:perpetuo96@cluster0-6fa7o.mongodb.net/finddev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(33334);