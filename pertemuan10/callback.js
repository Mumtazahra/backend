// function formatName(name) {
//     const result = name.toUpperCase();
//     return result;
// }
const formatName = (name) => name.toUpperCase();

const getName = (name, callFormatName) => console.log(callFormatName(name));
// function getName(name, callFormatName) {
//     const result = callFormatName(name);
//     console.log(result);
// }

getName("Zahra", formatName);