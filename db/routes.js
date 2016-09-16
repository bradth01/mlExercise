'use strict';

const express = require('express');
const router = express.Router();
const db = require('./models');
const User = db.User;

function nextScreen(screenId) {
    switch (screenId) {
        case 'one':
            return 'two';
        case 'two':
            return 'three';
        case 'three':
            return 'four';
        case 'four':
            return 'one';
    }
}

router.get('/form-status', (req, res, next) => {  
    User.findOrCreate({where: {completed: false}})
    .then(user => res.json(user))
    .catch(next)
});

router.post('/form-status', (req, res, next) => {
    User.findById(req.body.userId)
    .then(user => user.update(req.body))
    .then(updatedUser => {
        let nextScreenId = nextScreen(req.body.screenId);
        return updatedUser.update({screenId: nextScreenId})
    })
    .then(user => res.json(user))
    .catch(next)
});

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;