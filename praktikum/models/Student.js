// //membuat data students
// const students = ["Marisa","Robert","Lia","Jake"];

// // export data students
// module.exports = students;

// import database
const db = require("../config/database");

// membuat class Student
class Student {
    // solusi with callback
    static all() {
        // return promise sebagai solusi asynchronous
        return new Promise((resolve, reject) =>{
        const sql = "SELECT * from Students";
        /**
         * melakukan query menggunakan method query
         * menerima 2 params : query dan callback
         */
        db.query(sql, (err, results)=> {
            resolve(results);
        });
    });
    }

    static create(req) {
        return new Promise((resolve, reject)=>{
            const sql = `INSERT INTO student set?`;
            db.query(sql,req, (err,results)=>{
                const sql = `SELECT * FROM students WHERE id = ${results.Id}`;
                db.query(sql, (err,results)=>{
                resolve(results);
                });
            });
        });
    }
}

//export class Student
module.exports = Student;