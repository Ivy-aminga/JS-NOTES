let a = 20; //Global variable

function add (b){
    console.log({a});
console.log(a + b);
let c = 30;
console.log(a + b + c);
a = 60;
}
add (20);
console.log("a2",a);

function multiply(c){
    console.log(a * 3);
    // d = 7 ;
}
multiply(3);
// console.log(d);

function greet(){
    let Hello = "Hi";
    function talk(){
        let greeting = "hey there";
        console.log(`${Hello} ${greeting}`);
    
    }
    talk()

}
greet()