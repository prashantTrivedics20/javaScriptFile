let number = 24;
let c = 0;
for (let i = 1; i <= number; i++) {

    if (number % i == 0) {
        c++;
    }
}
if (c == 2) {
    console.log("the given number is prime");
} else {
    console.log("number is not prime");
}