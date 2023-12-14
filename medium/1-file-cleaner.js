// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

setTimeout(function (){
    fs.readFile("file.txt", "utf-8", (err, data) => {
        let modifiedData = data.replace(/ +/g, " ");
        fs.writeFile("file.txt", modifiedData, (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(modifiedData, "\n\n\nis the modified content of the file.")
        })
    })
}, 1000)
