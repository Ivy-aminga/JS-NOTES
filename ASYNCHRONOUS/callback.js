function add (num,callback){
    console.log(num);
    callback();
}

function nums(){
    console.log("Hello");
}

add(12,nums);