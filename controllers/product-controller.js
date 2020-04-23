var connection = require('./../DatabaseConnection');


module.exports.add=function(req,res){

    var img = req.body.image;
    var name = req.body.name;
    var brand = req.body.brand;
    var ingredients = req.body.ingredients;
    var price = req.body.price;
    var today = new Date();
    var created_at = today;
    var updated_at = today;

    if (img && name && brand && ingredients && price) {
        connection.query(
            `INSERT INTO products (img, name, brand, ingredients, price, created_at, updated_at)
              VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [img, name, brand, ingredients, price, created_at, updated_at],
            function (error, results, fields) {
                if (error) {
                    throw err;
                } else {
                    res.redirect('/admin-products');
                }
            });
    }
};

module.exports.edit=function(req,res){

    var id = req.body.productId;
    var img = req.body.image;
    var name = req.body.name;
    var brand = req.body.brand;
    var ingredients = req.body.ingredients;
    var price = req.body.price;
    var today = new Date();
    var updated_at = today;

    if (img && name && brand && ingredients && price) {
        console.log(true);
        connection.query(
            `UPDATE products SET img =  $2, name = $3, brand = $4, ingredients = $5, price = $6, updated_at = $7 WHERE id = $1`,
            [id, img, name, brand, ingredients, price, updated_at],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                    throw err;
                } else {
                    res.redirect('/admin-products');
                }
            });
    }
};

module.exports.delete=function(req,res){

    var id = req.body.productId;

    if (id) {
        connection.query(
            `DELETE FROM products WHERE id = $1;`,
            [id],
            function (error, results, fields) {
                if (error) {
                    throw err;
                } else {
                    res.redirect('/admin-products');
                }
            });
    }
};
