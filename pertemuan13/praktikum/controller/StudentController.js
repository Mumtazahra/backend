// Import model student
const db = require("../config/database");
// const Student = require("../models/Student");
const students = require("../models/Student");

// Membuat Class StudentController
class StudentController {
  // index(req, res) {
    
  //   // memanggil method static all
  //   Student.all(function(students){
  //     //menampilkan data students
  //     const data = {
  //       message: "Menampilkan semua students",
  //       data: students,
  //     };
  //     res.json(data);
  //   });

  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }
  

  // store(req, res) {
  //   const {nama} = req.body;
  //   students.push(`${nama}`);
    
  //   // menambahkan data students
  //   const data = {
  //     message: `Menambahkan data student: ${nama}`,
  //     data: students,
  //   };

  //   res.json(data);
  // }

  async store(req, res) {
    const students = await Student.create(req.body);

    // menambahkan data students
    const data = {
      message: `Menambahkan data students`,
      data: students,
    };

    res.json(data);
  }

  async update(req, res){
    const {id} = req.params;
    //cari id student yg ingin di cari
    const student = await Student.find(id);

    if(student) {
      const student = await Student.update(id,req.body);

      const data = {
        message: `Mengedit data students`,
        data: student,
      };
      res.status(200).json(data);
    }else{
      const data ={
        message: "Student not found",

      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res){
      const {id} = req.params;
      //cari id student yg ingin di cari
      const student = await Student.find(id);
  
      if(student) {
        await Student.delete(id);
        const data = {
          message: `Menghapus data students`,
        };
        res.status(200).json(data);
      }else{
        const data ={
          message: "Student not found",
        };
        res.status(404).json(data);
      }
  }
//       static delete(id){
//         return new Promise((resolve, reject)=>{
//           const sql = "DELETE FROM student WHERE id = ?";
//           db.query(sql, id, (err, results)=>{

//           });
//         });
//       }
//   }
//   // update(req, res) {
//   //   const { id } = req.params;
//   //   const { nama } = req.body;
//   //   students[id] = nama;

//   //   // mengupdate data students
//   //   const data = {
//   //     message: `Mengedit student id ${id}, nama ${nama}`,
//   //     data: students,
//   //   };

//   //   res.json(data);
//   // }

//   // destroy(req, res) {
//   //   const { id } = req.params;
//   //   students.splice(id,1)

//   //   // menghapus data students
//   //   const data = {
//   //     message: `Menghapus student id ${id}`,
//   //     data: students,
//   //   };

//   //   res.json(data);

async show(req, res) {
  const {id} = req.params;
  const student = await Student.find(id);

  if (student) {
    const data = {
      message: `Menampilkan detail students`,
      data : student, 
    };
    res.status(200).json(data);
  }else{
    const data = {
      message: `Student not found`,
    };
    res.ststus(404).json(data);
  }
}
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;