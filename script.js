
let $ = (selector) =>{
    return document.querySelector(selector) 
     
}


let hour = $(".hour");

let minute = $(".minute");

let seconds = $(".seconds");

let days = $(".days");


let display = () =>{
    let currentTime = new Date
    
    
    hour.textContent =  String(currentTime.getHours()).padStart(2, '0')

    minute.textContent = String(currentTime.getMinutes()).padStart(2, '0')
    
    seconds.textContent = String(currentTime.getSeconds()).padStart(2, '0')

}


setInterval(display, 1000)

display()













// console.log(currentTime.getHours())
// console.log(currentTime)
// console.log(currentTime.getMinutes())
// console.log(currentTime.getDay())
    // hour.textContent = currentTime.getDay()

    // console.log(currentTime.getDate())
    //set Timeout
    //set Interval
    