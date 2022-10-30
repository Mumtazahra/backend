<?php

# membuat class Animal
class Animal
{
    # property animals
    public $binatang;

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct($data)
    {
        $this->binatang = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        # gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->binatang as $animal) {
            echo $animal . '</br>';
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($binatang)
    {
        # gunakan method array_push untuk menambahkan data baru
        array_push($this->binatang, $binatang);
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $binatang) 
    {
        $this->binatang[$index] = $binatang;
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        # gunakan method unset atau array_splice untuk menghapus data array
        unset($this->binatang[$index]);
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(["Kuda", "Itik", "Kucing", "Pinguin"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Anjing');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kuda Pegasus');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(3);
$animal->index();
echo "<br>";
    