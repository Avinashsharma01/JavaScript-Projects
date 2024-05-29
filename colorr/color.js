let red=document.querySelector(".red")
let green=document.querySelector(".green")
let yellow=document.querySelector(".yellow")
let blue=document.querySelector(".blue")
let black=document.querySelector(".black")
let orange=document.querySelector(".orange")
let gold=document.querySelector(".gold")
let prebtn=document.querySelector(".prebtn")
let nextbtn=document.querySelector(".nextbtn")


let count=0


nextbtn.addEventListener("click", ()=>{
   
    green.style.backgroundColor='black'
    yellow.style.backgroundColor='green'
    blue.style.backgroundColor='yellow'
    black.style.backgroundColor='blue'
    orange.style.backgroundColor='black'
    gold.style.backgroundColor='orange'
    orange.style.backgroundColor='red'
    red.style.backgroundColor='gold'
  
})



prebtn.addEventListener('click',()=>{
    red.style.backgroundColor='green'
})