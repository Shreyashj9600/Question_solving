//What is find() & findIndex in JavaScript ?

const arr = [10, 20, 30, 40, 50];
// console.log(arr);

// const result = (val) => val > 20;
// console.log(arr.find(result));

// const result = arr.find( (val) => val > 20);
// console.log(result);

// const result = arr.find(function (val) {
//     return val > 20
// })
// console.log(result);

const result = arr.findIndex((val) => val > 20);
console.log(result);

// note

// find() send value storde in array . only one value
//  filter() send all value storde in array
// findIndex() it is give the array index
