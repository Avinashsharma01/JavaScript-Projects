const time = document.querySelector("#time")
const start = document.querySelector("#startBTN")
const reset = document.querySelector("#resetBTN")
const lap= document.querySelector(".lap")
let history=document.querySelector(".histry-record")
let lapReset=document.querySelector(".lapReset")
console.log(time)
console.log(start)
console.log(reset)
console.log(lap)
console.log(history)
console.log(lapReset)

let active = false
let chacha
let [ hh, mm, ss, ms]= [0,0,0,0]

let stopwatch=()=>{
    ms++
    if(ms>99){
        ms=0
        ss++
        if(ss>59){
            ss=0
            mm++
            if(mm>59){
                mm=0
                hh++
            }
        }
    }
   
    // console.log(hh,mm,ss,ms)
    hh= String(hh).padStart(2, '0')
    mm= String(mm).padStart(2, '0')
    ss= String(ss).padStart(2, '0')
    ms= String(ms).padStart(2, '0')
    time.textContent=`${hh}:${mm}:${ss}:${ms}`
}




// hh=hh<10? `0${hh}`: hh
// mm=mm<10? `0${mm}`: mm
// ss=ss<10? `0${ss}`: ss

lap.addEventListener("click",()=>{
    console.log(`${hh}:${mm}:${ss}:${ms}`)
    let create= document.createElement("h1")
    create.textContent=`${hh}:${mm}:${ss}:${ms}`
    create.setAttribute("first","second")
    history.appendChild(create)
})





lapReset.addEventListener("click",()=>{
   console.log("work is under progress")
})



start.addEventListener("click", (e) => {
    active = active ? false : true

    if (active) {
        start.style.backgroundColor = 'red'
        start.textContent = 'stop'
        start.style.color = 'white'
        chacha= setInterval(stopwatch,10)
    }else{
        start.textContent = 'stop'
        start.style.backgroundColor = 'white'
        start.style.color = 'black'
        clearInterval(chacha)
    }
})


// reset.addEventListener("click",()=>{
//     clearInterval(chacha)
//     [ hh, mm, ss, ms]= [0,0,0,0]
//     time.textContent="00:00:00:00"
//     console.log("first")
// })

reset.addEventListener("click", () => {
    clearInterval(chacha);
    [hh, mm, ss, ms] = [0, 0, 0, 0];
    time.textContent = "00:00:00:00";
    active = false; // Ensure the timer is stopped
    start.textContent = 'Start'; // Reset the button text
    start.style.backgroundColor = 'white'; // Reset the button style
    start.style.color = 'black';
    console.log("Timer reset");
});
