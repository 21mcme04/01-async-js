// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const prompt = require("prompt-sync")();
const fs = require("fs");

let data = prompt("Enter data to enter into file: ");

setTimeout(function (){
    fs.writeFile("file.txt", data, (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(`${data} is written to file`);
    } )
}, 10000)