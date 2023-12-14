// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(function (){
    let date = new Date();
    console.log(`24 Hour format is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    if(date.getHours() >12){
        let date_hours = date.getHours()-12;
        console.log(`12 Hour format is ${date_hours}:${date.getMinutes()}:${date.getSeconds()} PM`);
    }else{
        console.log(`12 Hour format is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`);
    }
}, 1000);