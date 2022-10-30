<?php
function hitungLuasLingkaran($jari)
{
    $phi = 3.14;
    $luasLingkaran = $phi * $jari;
    return $luasLingkaran;
}

# memanggil fungsi
echo hitungLuasLingkaran(7);
echo "<br>";
echo hitungLuasLingkaran(6);
echo "<br>";
echo hitungLuasLingkaran(5);