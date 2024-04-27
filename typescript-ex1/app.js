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
//------Interface-----------------
const student = {
    name: "Parbhat",
    class: '12-B',
    age: 19,
    email: '1009prbaht@gmail.com'
};
//function takes an argument---------------------------
function validageToWatchMovie(age) {
    if (age > 14) {
        return 'valid';
    }
    else {
        return 'invalid';
    }
}
let checke = validageToWatchMovie(10);
console.log(checke);
function InterfaceCheck(student) {
    if (student.age > 14) {
        return true;
    }
    else {
        return false;
    }
}
console.log(InterfaceCheck({
    firstname: "Nafar",
    lastname: "Khan",
    age: 10,
    email: "!86d6@gmail.com"
}));
function greet(student) {
    console.log("email--", student.email);
}
console.log(greet(student));
