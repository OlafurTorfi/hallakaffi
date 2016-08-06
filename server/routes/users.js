'use strict';

var express = require('express');
var router = express.Router();
var db;

/* GET users listing. */
router.get('/newUser', function(req, res, next) {
    var userSql = `
    select a.lysing, a.notandiid from notendur a left outer join utsjoppa b on b.userid = a.notandiid where b.userid is null`;
    db.query(userSql,[]).then(function(notendur){
        res.render('users', {title: 'Hallakaffi', users: notendur});
    });
});

module.exports = function(dbIn){
    db = dbIn;
    return router;
};
