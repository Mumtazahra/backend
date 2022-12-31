// //membuat data students
// const students = ["Marisa","Robert","Lia","Jake"];

// // export data students
// module.exports = students;

// import database
const db = require("../config/database");

// membuat class Student
class Student {
    // solusi with promise
    static all() {
        // return promise sebagai solusi asynchronous
        return new Promise((resolve, reject) =>{
        const query = "SELECT * from Students";
        /**
         * melakukan query menggunakan method query
         * menerima 2 params : query dan callback
         */
        db.query(query, (err, results)=> {
            resolve(results);
        });
    });
    }

    static async create(data) {
        // return new Promise((resolve, reject)=>{
            const id = await new Promise((resolve, reject)=>{
            const sql = "INSERT INTO student set?";
            db.query(sql,data, (err,results)=>{
                // const sql = `SELECT * FROM students WHERE id = ${results.Id}`;
                // db.query(sql, (err,results)=>{
                resolve(results, insertId);
                });
            });

            return new Promise((resolve, reject)=>{
                const sql = "SELECT * FROM student WHERE id = ?";
                db.query(sql, id, (err,results)=>{
                    resolve(results);
                });
            });
        // });
    }

    static find(id) {
        return new Promise((resolve, reject)=>{
            const sql = "SELECT * FROM student WHERE id = ?";
            db.query(sql, id, (err,results)=>{
                // desctructing array
                const [student] = results;
                resolve(students);
            });
        });
    }

    static async update(id, data){
        await new Promise((resolve, reject)=>{
        const sql = "UPDATE students SET ? WHERE id = ?";
        db.query(sql,[data, id], (err, results)=>{
            resolve(results);
        });
        });

        const student = await this.find(id);
        return student;
    }

    static delete(id){
        return new Promise((resolve, reject)=>{
            const sql = "DELETE FROM students WHERE id =?";
            db.query(sql, id,(err, results)=>{
                resolve(results);
            });
        });
    }

    static find(id){
        return new Promise((resolve, reject)=> {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results)=> {
                // destructing array
                const [student] = results;
                resolve(student);
            });
        });
    }
}

//export class Student
module.exports = Student;