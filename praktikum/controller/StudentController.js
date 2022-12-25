// Import model student
const Student = require("../models/Student");
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
      message: `Menambahkan data student`,
      data: students,
    };

    res.json(data);
  }

  // update(req, res) {
  //   const { id } = req.params;
  //   const { nama } = req.body;
  //   students[id] = nama;

  //   // mengupdate data students
  //   const data = {
  //     message: `Mengedit student id ${id}, nama ${nama}`,
  //     data: students,
  //   };

  //   res.json(data);
  // }

  // destroy(req, res) {
  //   const { id } = req.params;
  //   students.splice(id,1)

  //   // menghapus data students
  //   const data = {
  //     message: `Menghapus student id ${id}`,
  //     data: students,
  //   };

  //   res.json(data);
  // }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;