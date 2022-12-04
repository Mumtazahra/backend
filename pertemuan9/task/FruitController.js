// ompirt data fruits
const fruits = require("./fruits.js");

//membuat fungsi index
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

// membuat fungsi store
const store = (name) => {
    fruits.push(name);
    console.log(`Method store - Menambahkan buah ${name}`);
    index();
};

// membuat fungsi update
const update = (position, name) => {
    fruits[position] = name;
    console.log(`Method update - Update data ${position} menjadi ${name}`);
    index();
};

// membuat fungsi destroy
const destroy = (position) => {
    const value = fruits.indexOf(fruits[position]);
    if (value > -1) {
        fruits.splice(value, 1);
    }
    console.log(`Method destroy - Menghapus data ${position}`);
    index();
};

// export method index dan store
module.exports = { index, store, update, destroy};