let success = true;

let promise = new Promise(function(resolve,reject){
    if(success){
        resolve('I have everything');
    }
    else{
        reject('I am still poor')
    }
}).then(()=>{console.log('It is a dream come true');})
.catch(()=>{console.log('I will get my own money');})
.finally(()=>{console.log('I will be happy');})
console.log({promise});




function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );





















