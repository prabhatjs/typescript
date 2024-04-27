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
