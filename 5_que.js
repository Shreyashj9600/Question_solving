// How to sum of array values? 

const arr = [1,2,3,67,87]

const additon = arr.reduce( (acc,currval) => (acc + currval),0)
console.log(additon);