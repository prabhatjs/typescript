const a:any=10;
console.log(a);

function print(name:string){
    console.log("name",name);
}

print("[rabhat]");

function checker(name:string,lastname:string,age:number){
    if(age>18){
        return true;
    }
    return false;
}

const val:boolean=checker("prbhta","Singh",20);
console.log(val);


//create a function take a function as an input run after 1 sec;

function first(cb:()=>void){
    setTimeout(()=>{
            cb();
    },1000)
}

first(function(){
    console.log('run after 1 sec');
})


//------Interface-----------------

const student={
    name:"Parbhat",
    class:'12-B',
    age:19,
    email:'1009prbaht@gmail.com'
}

interface student{
    name:string,
    class:string,
    age:number,
    email:string
}

//function takes an argument---------------------------

function validageToWatchMovie(age:number){
    if(age>14){
        return 'valid'
    }
    else{
        return 'invalid'
    }
}

let checke=validageToWatchMovie(10);
console.log(checke);


function InterfaceCheck(student:{
    firstname:string,
    lastname:string,
    age:number,
    email:string
}){
    if(student.age>14){
        return true;
    }else{
        return false;
    }
}

console.log(InterfaceCheck({
    firstname:"Nafar",
    lastname:"Khan",
    age:10,
    email:"!86d6@gmail.com"

}))

function greet(student:student){
    console.log("email--",student.email);
}

console.log(greet(student));