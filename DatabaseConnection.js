const { Client } = require('pg');
const client = new Client({
    user: 'zhwfgmxnxzgmfc',
    password: '6a1ccf7c036a22d9b31e0d0b89cd3f7517c7dbadd2af5d920c63b78aa752cf01',
    database: 'd8f9p5d7vjntfp',
    port: 5432,
    host: 'ec2-54-75-246-118.eu-west-1.compute.amazonaws.com',
    ssl: { rejectUnauthorized: false }
});

client.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log(err.stack);
        console.log("Error while connecting with database");
    }
});

module.exports = client;
