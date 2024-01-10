//How to find second largest number in array 

const MyArr = [98,45,56,65,23,32]
console.log(MyArr);
MyArr.sort((a,b) => a-b);
console.log(MyArr);
console.log('largest :' + MyArr[MyArr.length-1]);

// console.log('second largest element in given array :'+MyArr[1]);    