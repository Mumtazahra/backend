const {index, store, update, destroy} = require("./FruitController.js");

const main = () => {
    console.log(`Method index - Menampilkan Buah`);
    index();
    console.log("");
    store("Pisang");
    console.log("");
    update(4, "Jeruk");
    console.log("");
    destroy(3);
};

main();