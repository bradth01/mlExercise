'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const models = require('./models');
const formStatusRouter = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

models.User.sync({})
.then(function () {
    app.listen(process.env.PORT || 1337, function() {
        console.log('listening on port %d in %s mode', this.address().port, app.settings.env);
    });
})
.catch(console.error);

app.use('/', require('./routes'));

module.exports = router;