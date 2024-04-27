"use strict";
const a = 10;
console.log(a);
function print(name) {
    console.log("name", name);
}
print("[rabhat]");
function checker(name, lastname, age) {
    if (age > 18) {
        return true;
    }
    return false;
}
const val = checker("prbhta", "Singh", 20);
console.log(val);
//create a function take a function as an input run after 1 sec;
function first(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
first(function () {
    console.log('run after 1 sec');
});
