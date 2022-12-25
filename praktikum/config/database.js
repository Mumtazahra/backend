// import mysql
const mysql = require("mysql");

// import ditenv dan menjalankan method config
require("dotenv").config();

// destacting object process.env
const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * membuat koneksi menggunakan method crreateConnection
 * method menetima parameter object: host, user, password, database
 */
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

/**
 * menghubungkan ke database
 * menerima parameter callback
 */
db.connect((err) => {
    if(err) {
        console.log("Error conecting " + err.stack);
        return;
    }else {
        console.log("Connected to database");
        return;
    }
});
module.exports = db;
