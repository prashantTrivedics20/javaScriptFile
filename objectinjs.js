// object is group of key: value pair
//how to make object
// key : value -> property
// key : function -> method
let cap = {
    name: "prashant",
    lastname: "trivedi",
    address: { // here address is also an object
        city: "kanpur",
        state: "up"
    },
    age: 20,
    isAvenger: true,
    movie: ["first Avenger", "winter soldier", "civil war"],
    sayHi: function() {
        console.log("cap says hai");
    }

};
console.log("cap:", cap);
// it will create the object
// to access the value
// how to get key from object
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movie[1]);
// cap.sayHi();
// SET/UPDATE
cap.age = 19;
cap.isAvenger = false;
cap.friends = ["sudeep", "saksham", "pulkit"];
console.log("''''''''''''''''''''");
console.log("cap:", cap);
// if you want to delete any key thenby using the delete keyword you delete
// delete
delete cap.address;
console.log("'''''''''''''''''''''''''");
console.log("cap:", cap);
//if you want to access the key one by one then we use this for in loop
for (let key in cap) {
    console.log(key, ":", cap[key]);

}
// square bracket is the another way of access the key
let propkey = "age";
console.log(cap[propkey]); // it will first assign inplace of propkey to age and then it will
// it will search on object and return corresponding value..
//another way
console.log(cap.age); // it will directely give the value
console.log(cap['age']); // it will alsodirectely give the value
// if key dose not exist then it will give undefined
console.log(cap.xyz);