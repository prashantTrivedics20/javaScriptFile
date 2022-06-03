function sayHi(param) {
    let rval = Math.random() > 0.5 ? true : "less than 0.5";
    return rval;


}
let rval = sayHi([1, 2, 3, 4, 5]);
console.log("rval", rval);