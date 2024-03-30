// function hello(){
//     // let date = new Date()
// // console.log(date.getFullYear())
// // console.log(date.getMonth())
// // console.log(date.getDay())
// // console.log(date.toLocaleDateString("en-IN",{month:"long"}))
// // console.log(date.toLocaleDateString("en-IN",{weekday:"long"}))

// // this is the experiment before the project 


// // window.addEventListener("DOMContentLoaded",()=>{
// //     let date = new Date()
// // })



// function updateTime() {
//     const date = new Date();
//     const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
//     const timeString = date.toLocaleTimeString("en-IN", options);
//     document.getElementById("clock").textContent = timeString;
// }

// setInterval(updateTime, 1000); // Update time every second

// // Initial call to display the time immediately
// updateTime();




const date1=document.querySelector("#date1")
const date=document.querySelector("#date")
const month=document.querySelector("#month")
const year=document.querySelector("#year")
const time=document.querySelector("#time")
const day=document.querySelector("#day")

const newdate= new Date()
window.addEventListener("DOMContentLoaded", ()=>{
    date1.innerHTML=newdate.getDate()
    date.innerHTML=newdate.getDate()
    month.innerHTML=newdate.toLocaleDateString("en-IN",{month:"long"})
    year.innerHTML=newdate.getFullYear()
    day.innerHTML=newdate.toLocaleDateString("en-IN", {weekday:"long"})
})

setInterval(()=>{
    const hellodate= new Date()
    const option={hour:'numeric', minute:'numeric', second:'numeric', hour12:true}
    const timeString=hellodate.toLocaleTimeString("en-IN", option)
    time.textContent=timeString
},1000)


console.log(newdate)