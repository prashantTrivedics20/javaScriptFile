let singlrQuotes = 'single quotes ki string';
let doubleQuotes = "double quotes ki string";
console.log(singlrQuotes);
console.log(doubleQuotes);
// if you want to get the character then
let char = singlrQuotes.charAt(0); // it will give the character but it will treate as a string
let ascicode = singlrQuotes.charCodeAt(0); // it will give the ascii code the character
console.log(char);
console.log(ascicode);
let subStr = singlrQuotes.substring(2, 3);
console.log(subStr);
// important function split and join
// split()
singlrQuotes = singlrQuotes.trim();
let arrStr = singlrQuotes.split("i"); // it will give the string array
console.log(arrStr);
let arrStr1 = singlrQuotes.split(""); // it will give the string array
console.log(arrStr1);
// join()
let str = arrStr1.join("$");
console.log(str);