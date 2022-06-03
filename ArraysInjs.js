//arrays declare
// array is dynamic in java Script
//let arr[]
let array = [1, 2, 3, 4, 5];
console.log(array); // it will not give any Error in javaScript but int java it will print the referce the not 
// actual content of the array
console.log(array.lenght); // it will give the length of the array
let i = 0;
let len = array.length;
while (i < len) {
    console.log("Array Element ->", "idx", i, "is", array[i]);
    i++;
}
// array function
// 1- addition
array.push("last value"); // it will add the value at the end of the array..
array.unshift("first value"); //it will add the value at the begining of the array..
console.log("'''''''''''''''");
console.log(array);
//2-deletion
array.shift(); // it will remove the first element of the array
array.pop(); // it will remove the last element of the array
console.log("'''''''''''''''");
console.log(array);
// slice function
let indexofval = array.indexOf(2, 0); // array.indexof(element,start index position);
console.log(indexofval);
let partofarray = array.slice(2, 4); //array.slice(startindex,endindex);// basically end index
// is not included
console.log(partofarray);
// splice() // it will change the actual array it will not make copy
array.splice(2, 1); //array.splice(index,startcount)// it will delete the second index position
// element this is kind ofgeneric delection

console.log(array);