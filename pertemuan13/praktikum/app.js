// import express
const express = require("express");
const router = require("./routes/api.js");

// membuat object express
const app = express();

// /**
//  * Membuat routing
//  */
// app.get("/",(req, res) => {
//     res.send("Hello Express");
// });

// app.get("/students", (req, res) => {
//     res.send("Menampilkan data student");
// });

// app.post("/students", (req, res) => {
//     res.send("Menambahkan data student");
// });

// app.put("/students", (req, res) => {
//     res.send("Mengedit data student");
// });

// app.delete("/students", (req, res) => {
//     res.send("Menghapus data student");
// });

// Menggunakan middleware
app.use(express.json());
// app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router)

// mendefinisikan port
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Server running at : http://localhost:${PORT}`)
);