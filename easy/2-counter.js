//Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

function delay(time){
let myPromise = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve()
        },time);
    })
return myPromise;
}
//creating a promise for delay of 1 sec.
  
async function time(){
while(true){
    await delay(1000);
    console.log(new Date().toLocaleTimeString());
    }
}
//using the delay of 1 sec and then printing the time.
  
time();


