const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res, next) => {
    User.find({})
        .then((data) => res.json(data))
        .catch(next);
});

router.post('/user', (req, res, next) => {
    if(req.body.action){
        User.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
    }else{
        res.json({
            error: 'The input field is empty',
        });
    }
});

router.delete('/user/:id', (req, res, next) => {
    User.findOneAndDelete({_id: req.params.id})
        .then((data) => res.json(data))
        .catch(next);
});

module.exports = router;