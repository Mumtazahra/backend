<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    # method index - get all resource
    public function index()
    {
        # menggunakan model student untuk slect data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        # menggunakan response json laravel
        # otomatis set header content type json
        # otomatis mengubah data array ke json
        #mengatur status code
        return response()-> json($data,200);
    }

        // menambahkan resource
    // method post
    public function store(Request $request){
        // menangkap request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        // menggunakan student untuk insert data
        $students = Student::create($input);

        $data = [
            'message' => 'Data student berhasil dibuat',
            'data' => $students, 
        ];

        // mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }

    // mengubah resource
    // method put
    public function update(Request $request, $id){
        $studentsup = Student::find ($id);
        $studentsup->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ]);
        
        $data = [
            'message' => 'Data student berhasil diubah',
            'data' => $studentsup,
        ];
        return response()->json($data, 200);
    }

    public function destroy($id){
        $studentsupp = Student::delete ($id);
        
        $data = [
            'message' => 'Data student berhasil dihapus : ' . $id,
            'jumlah data yang tehapus' => $studentsupp,
        ];
        return response()->json($data, 200);
    }
}