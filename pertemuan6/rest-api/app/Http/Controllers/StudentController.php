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

    public function index()
    {
        # menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        # menggunakan response json laravel
        # otomatis set header content type json
        # otomatis mengubah data array ke JSON
        # mengatur status code
        return response()->json($data, 200);
    }

    # mendapatkan detail resource student
    # membuatmethod show
    public function show($id)
    {
        # cari data student
        $students = Student::find($id);

        if($students)
        {
        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        #mangembalikan data json status code 200
        return response()->json($data, 200);
    }else{
        $data = [
            'message' => 'Student not found',
        ];
            #mangembalikan data json status code 200
        return response()->json($data, 404);
   
    }
    }

    # mengupdate resource studen
    # dengan membuat method update
    public function update(Request $request, $id){
        # cari data student yg ingin dicari
        $students = Student::find ($id);

        if ($students)
        {
        # mendapatakan data request
        $input = [
            'nama'=>$request->nama ?? $students->nama,
            'nim'=>$request->nim ?? $students->nim,
            'email'=>$request->email ?? $students->email,
            'jurusan'=>$request->jurusan ?? $students->jurusan,
        ];

        # mengupdate data
        $students->update($input);

        $data = [
            'message'=>'Resource student updated',
            'data'=>$students,
        ];
         #mangembalikan data json status code 200
        return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Student not found',
            ];
                #mangembalikan data json status code 200
            return response()->json($data, 404);
       
        }
    }

    public function destroy($id)
    {
        # mencari data student yg ingin di apus
        $students = Student::find($id);

        if($students)
        {
        #hapus data student
        $student->delete();

        $data = [
            'message'=>'Student is Deleted',
        ];

        # mengembalikan data json status code 200
        return response()->json($data, 200);
    }else{
        $data = [
            'message' => 'Student not found',
        ];
            #mangembalikan data json status code 200
        return response()->json($data, 404);
   
    }
    }
}