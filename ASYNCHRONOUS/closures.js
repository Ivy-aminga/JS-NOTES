let add = ()=>{
    let num = 20;
    let subtract = ()=>{
        return 30 - num;
    }
    return subtract;
}
let nums = add();
console.log({nums});
console.log(nums());