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

const student19={
    name:"Parbhat",
    class:'12-B',
    age:19,
    email:'1009prbaht@gmail.com'
}

interface student19{
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


interface student{
    firstname:string,
    lastname:string,
    age:number,
    email:string
};
function InterfaceCheck(student:student){
    if(student.age>14){
        return true;
    }else{
        return false;
    }
}

console.log(InterfaceCheck({
    firstname:"Nafar",
    lastname:"Khan",
    age:100,
    email:"186d6@gmail.com"

}))

function greet(student:student){
    console.log("email--",student.email);
}

console.log(greet({
    firstname:"Nafar",
    lastname:"Khan",
    age:100,
    email:"199d6@gmail.com"

}));

//implement interfcae

interface Person{
    name:string,
    age:number,
    message(phrase:string):void;//message take an argument string type
}

class Employee implements Person{
    name:string;
    age:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    message(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}


class SeniorManagers implements Person{
    name:string;
    age:number;
    salary:number;
    constructor(n:string,a:number,s:number)
    {
        this.name=n;
        this.age=a;
        this.salary=s;
    }
    message(phrase: string) {
        console.log(`${phrase} ${this.name} you salary is ${this.salary}`);
    }
}

const e=new Employee("Psy",24)
const sm=new SeniorManagers('Alok',55,300000);
console.log(sm.name);
sm.message("hello");
console.log(e.name);
e.message("Hello");

//Types this is like interface types let you aggregate data together,types not to use as implement in classes only interface are implements

type Students={
    FirstName:string;
    LastName:string;
    age:number
}

//unions

//print the user pan number which can be number or string;

type pannumber=string|number

function User(pannumber:pannumber)
{
    console.log(pannumber)
}

User('ABC123');
User(1903836);


//intersections-- you can intersect between types and interface you can use both of them with types using intersection

interface GlobalUnit{
    name:string;
    age:number;
}

type KanpurUnit={
    name:string;
    punchTime:Date;
}

type KanpurUsers =  KanpurUnit & GlobalUnit;
const GUser:KanpurUsers={
    name:"Jay Shankar",
    age:30,
    punchTime:new Date()    
}
console.log(GUser); 

//array 
function maValue(arr:number[]){
    let maxvalue=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxvalue)
            {
                maxvalue=arr[i];
            }
    }
    return maxvalue;
}

let num:number=maValue([1,2,3,4]);
console.log(num);

