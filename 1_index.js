// How To find duplicate elements in array in javascript ?

const Arr = [1, 2, 2, 3, 4, 4, 5, 7, 7, 1];

const result = Arr.filter( (item, index, self) => {
    return self.indexOf(item) !== index;
} )



console.log(Arr);
console.log(result);  //  [ 2, 4, 7, 1 ]


