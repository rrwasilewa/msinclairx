const express = require('express');
var router = express.Router();
var session = require('express-session');
var connection = require('./DatabaseConnection');
var bodyParser = require('body-parser');

//Controllers setup
var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');
var productController = require('./controllers/product-controller');

router.use(session({
    secret: 'awdawd',
    resave: false,
    saveUninitialized: true
}));

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var sess;

// route to handle entry point
router.get('/', function(req, res){
    res.render('pages/index',{status: ""});
});

router.get('/registration', function(req, res){
    res.render('pages/registration', {
        status: "",
        alert_danger: "",
        error: ""
    });
});

// route to handle login form
router.get('/login', function(req, res){
    res.render('pages/login',{
        status: "",
        alert_danger: "",
        error: ""
    });
});

// route to handle login and registration controllers
router.post('/controllers/register-controller', registerController.register);
router.post('/controllers/authenticate-controller', authenticateController.authenticate);

// route to handle users
router.get('/users', function(req, res){
    sess = req.session;
    if (sess.status == "ADMIN"){
        connection.query("SELECT * FROM users", function (error, results, fields){
            if (error) {
                throw err;
            } else {
                res.render('pages/users', {
                    user: sess.username,
                    status: sess.status,
                    UsersTable: results.rows
                });
            }
        });
    } else {
        res.redirect('/login');
    }
});

// route to handle adminProducts
router.get('/admin-products', function(req, res){
    sess = req.session;
    if (sess.status == "ADMIN"){
        connection.query("SELECT * FROM products", function (error, results, fields){
            if (error) {
                throw err;
            } else {
                res.render('pages/adminProducts', {
                    user: sess.username,
                    status: sess.status,
                    ProductsTable: results.rows
                });
            }
        });
    } else {
        res.redirect('/login');
    }
});

router.post('/product-add', productController.add);
router.post('/product-edit', productController.edit);
router.post('/product-delete', productController.delete);

// route to handle products
router.get('/products', function(req, res){
    sess = req.session;
    if (sess.status == "USER") {
        connection.query("SELECT * FROM products", function (error, results, fields){
            if (error) {
                throw err;
            } else {
                res.render('pages/home', {
                    user: sess.username,
                    status: sess.status,
                    ProductsTable: results.rows
                });
            }
        });
    } else {
        res.redirect('/login');
    }
});

// route to handle products
router.get('/chat-room', function(req, res){
    sess = req.session;
    if (sess.status == "USER" || sess.status == "ADMIN") {
        res.render('pages/chatRoom', {
            user: sess.username,
            status: sess.status
        });
    } else {
        res.redirect('/login');
    }
});

// route to handle logout
router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
            console.log(req.session);
        }
    });
});

module.exports = router;
