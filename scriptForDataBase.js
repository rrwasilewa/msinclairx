var pg = require('pg')

var client = new pg.Client({
    user: 'zhwfgmxnxzgmfc',
    password: '6a1ccf7c036a22d9b31e0d0b89cd3f7517c7dbadd2af5d920c63b78aa752cf01',
    database: 'd8f9p5d7vjntfp',
    port: 5432,
    host: 'ec2-54-75-246-118.eu-west-1.compute.amazonaws.com',
    ssl: { rejectUnauthorized: false }
});

client.connect()

// client.query(
//   `CREATE TABLE users (
//     id SERIAL NOT NULL PRIMARY KEY,
//     name varchar(255),
//     email varchar(255),
//     password varchar(255),
//     created_at	timestamp default NULL,
//     updated_at	timestamp default NULL,
//     status varchar(20)
// )`, (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query(
//   `CREATE TABLE products (
//     id SERIAL NOT NULL PRIMARY KEY,
//     name varchar(255),
//     brand varchar(255),
//     ingredients varchar(255),
//     price decimal(5, 2),
//     created_at	timestamp default NULL,
//     updated_at	timestamp default NULL
// )`, (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// client.query(
//     `ALTER TABLE products ADD COLUMN img varchar(255)`, (err, res) => {
//         console.log(err, res)
//         client.end()
//     })

// var today = new Date();
// var created_at = today;
// var updated_at = today;
// client.query(
//   `INSERT INTO products (name, brand, ingredients, price, created_at, updated_at)
//   VALUES ('Expressions: Love To The Fullest', 'Reese Witherspoon', 'Black Cherry, Peony', '58.80', $1, $2);`,[created_at, updated_at], (err, res) => {
//     console.log(err, res)
//     client.end()
// })

//
// var Cryptr = require('cryptr');
// cryptr = new Cryptr('myTotalySecretKey');
// var password = cryptr.encrypt("admin");
// var today = new Date();
// var created_at = today;
// var updated_at = today;
// client.query(
//   `INSERT INTO users (name, email, password,created_at, updated_at, status)
//   VALUES ('admin', 'admin@abv.bg', $1, $2, $3, 'ADMIN');`,[password, created_at, updated_at], (err, res) => {
//     console.log(err, res)
//     client.end()
// })
// //

// client.query(`select * from users`, (err, res) => {
//     console.log(err, res)
//     client.end()
// })

// client.query(`TRUNCATE users`, (err, res) => {
//   console.log(err, res)
//   client.end()
// })
