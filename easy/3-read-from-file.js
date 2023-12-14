// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")

setTimeout(function(){
    fs.readFile("../README.md", "utf-8", function (err, data){
        console.log(data);
    })
}, 1000);

for(let i=0;i<10000000000;i++){
    // console.log(i)
}
//this takes considerable amount of time to run, if we add some more loops, then they run before
//the asyncronous setTimeout function runs, waits in the callback queue.