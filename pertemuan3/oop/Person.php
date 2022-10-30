<?php

class Person{
    public $nama;
    public $alamat;
    public $jurusan;

    public function setNama($data)
    {
        $this->nama = $data;
    }

    public function getNama()
    {
        return $this->nama;
    }
}

$zahra = new Person();
$zahra->setNama("Zahra mumtazah");
echo $zahra->nama;
echo '<br>';

$chim = new Person();
$chim->setNama("Park chim");
echo $chim->nama;