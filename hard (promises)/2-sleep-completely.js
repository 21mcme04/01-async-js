/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     let p = new Promise((resolve, reject) => {
//         let i=0;
//         while(i<milliseconds){
//             setInterval(function(){
//                 //do nothing
//                 i++;
//             },1)
//         }
//         resolve();
//     })
// }
// the above code is throwing error "FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory" 
// and getting aborted.

function sleep(milliseconds) {
    let p = new Promise((resolve, reject) => {
      setTimeout(function (){
        resolve();
      }, milliseconds);
    });
    return p;
}  

module.exports = sleep;
