var Cryptr = require('cryptr');
var express = require("express");
var connection = require('./../DatabaseConnection');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.register = function (req, res) {


    var today = new Date();
    var encryptedString = cryptr.encrypt(req.body.password);
    var name = req.body.name;
    var email = req.body.email;
    var password = encryptedString;
    var created_at = today;
    var updated_at = today;
    var status = "USER";

    if (name && email && password) {
        connection.query("SELECT * FROM users WHERE email = $1", [email], function (error, results, fields) {
            if (error) {
                throw err;
            } else {
                if (results.rowCount > 0) {
                    res.render('pages/registration', {
                        alert_danger: "alert alert-danger",
                        error: "Email exist"
                    });
                } else {
                    connection.query(
                            `INSERT INTO users (name, email, password, created_at, updated_at, status)
              VALUES ($1, $2, $3, $4, $5, $6);`,
                        [name, email, password, created_at, updated_at, status],
                        function (error, results, fields) {
                            if (error) {
                                throw err;
                            } else {
                                res.redirect('/login');
                            }
                        });
                }
            }
        });
    }

};
