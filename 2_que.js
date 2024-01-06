// What is JavaScript Array flat() Method?

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(Infinity);  // find a dept of array then ues Infinity

console.log("Original nested array:", nestedArray);
console.log("Flattened array:", flattenedArray);
