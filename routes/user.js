var express = require('express');
const router = express.Router();

router.get('/login', function(req, res, next){
    res.render('login')
})

router.get('/registrasi', function(req, res, next){
    res.render('registrasi')
})

module.exports = router;