// let red=document.querySelector(".red")
// let green=document.querySelector(".green")
// let yellow=document.querySelector(".yellow")
// let blue=document.querySelector(".blue")
// let black=document.querySelector(".black")
// let orange=document.querySelector(".orange")
// let gold=document.querySelector(".gold")
// let prebtn=document.querySelector(".prebtn")
// let nextbtn=document.querySelector(".nextbtn")


// let count=0


// nextbtn.addEventListener("click", ()=>{

//     green.style.backgroundColor='black'
//     yellow.style.backgroundColor='green'
//     blue.style.backgroundColor='yellow'
//     black.style.backgroundColor='blue'
//     orange.style.backgroundColor='black'
//     gold.style.backgroundColor='orange'
//     orange.style.backgroundColor='red'
//     red.style.backgroundColor='gold'

// })



// prebtn.addEventListener('click',()=>{
//     red.style.backgroundColor='green'
// })



document.addEventListener("DOMContentLoaded", () => {
    let red = document.querySelector(".red");
    let green = document.querySelector(".green");
    let yellow = document.querySelector(".yellow");
    let blue = document.querySelector(".blue");
    let black = document.querySelector(".black");
    let orange = document.querySelector(".orange");
    let gold = document.querySelector(".gold");
    let prebtn = document.querySelector(".prebtn");
    let nextbtn = document.querySelector(".nextbtn");

    if (!prebtn || !nextbtn) {
        console.error("Buttons not found");
        return;
    }

    let colors = ["red", "green", "yellow", "blue", "black", "orange", "gold"];
    let count = 0;

    nextbtn.addEventListener("click", () => {
        count = (count + 1) % colors.length;
        updateColors();
    });

    prebtn.addEventListener("click", () => {
        count = (count - 1 + colors.length) % colors.length;
        updateColors();
    });

    function updateColors() {
        red.style.backgroundColor = colors[(count + 0) % colors.length];
        green.style.backgroundColor = colors[(count + 1) % colors.length];
        yellow.style.backgroundColor = colors[(count + 2) % colors.length];
        blue.style.backgroundColor = colors[(count + 3) % colors.length];
        black.style.backgroundColor = colors[(count + 4) % colors.length];
        orange.style.backgroundColor = colors[(count + 5) % colors.length];
        gold.style.backgroundColor = colors[(count + 6) % colors.length];
    }
});