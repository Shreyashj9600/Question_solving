//Difference between Map & Filter Functions

// const arr1 = [1,2,3,4,5];
// console.log(arr1);

// const arr2 = arr1.map((val) => val + 2)
// console.log(arr2)

const arr1 = [1,2,3,4,5]
const FilterFun = arr1.Filter((val) => 
    val < 3
)
console.log(arr1);
console.log(FilterFun);