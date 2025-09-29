/* console.log("Hello World"); */

/* console.log(a)
var a = 20;     // Hosting -> undefined

console.log(b)   // Error Genearted 
let b = 40; */

// let is scoped (local variable)
// var is global scoped 

// Functions 

// Functions as an expression, output of a function is stored in the variable 

// Arror Function 

/* const data = (msg) => {
    return ("Hii...Hello" +msg);
}
let message = data("Good Morning")
console.log(message); */
/* const data = msg => msg;
const data1 = data("Heloooo"); */

/* //IIFE
(() => {
    console.log("Hellooo");
})(); */

function selectLanguage(lang){
    let data;
    if(lang == "java"){
        function javaCompiler(){
            return " Hey, Java Compiler calling...";
        }
        data = javaCompiler();
    }
    else if(lang == "c"){
        function cCompiler(){
            return "Hey, C Compiler";
        }
        data = cCompiler();
    }
    else{
        data = "no compiler avail";
    }
    return data;
}
const data1 = selectLanguage("c");
console.log(data1);
