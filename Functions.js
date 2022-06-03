// non-primitive=> array,object ,function
function sayHi(param) {
    console.log("Hello from sayHi");
    console.log("param recieved ", param);
    // there is not need to specify the return statement you can return any type of value
    // to define the function you have to only specify the function keyword and function name
    return "return from a function";



}
// fn call
sayHi(10);
sayHi("hello");
sayHi([1, 2, 3, 4, 5]);
// in function there is no need to define the return type and also there is no need to define
// the parameter type..