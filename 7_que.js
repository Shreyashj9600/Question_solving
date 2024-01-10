//How to add value in array specific position

const arr = ['jan','feb','apr','may']

arr.splice(2,0,"march")  // 2 -- is a index , 0/1 ---->remove or add array item, 'march'--> is a value
console.log(arr);