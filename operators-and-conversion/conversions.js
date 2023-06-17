let a = 10
let b ="10"
// IMPLICIT COERSION

let c = b + a;
console.log({c});
let d = b*1;

console.log(d + a);
let e = +b + a;
console.log({e});


// Explicit coersion
console.log({"String":String(b)});
console.log({b});

console.log({"String":String(a)});
console.log({"array":Array(b)});