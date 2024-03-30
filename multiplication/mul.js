let score=document.querySelector("#score");
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let input=document.querySelector(".inputQ");
let btn=document.querySelector(".btn");
let h2=document.querySelector('h2');
let result=document.querySelector(".result");

let count=0;

btn.addEventListener("click", ()=>{
    
    let val= Number(input.value);
    let mult = num1.innerText*num2.innerText;
    mult = Number(mult);
    if(input.value === ''){
        alert("Please Enter number ");
    }
    else if(val===mult){
        // console.log("sahi hai ");
        console.log(h2.innerText+ ":- "+ val)
        result.innerText= "Answer is =  "+ val
        count++;
        score.innerText=count;
        num1.innerText = Math.floor(Math.random() * 10);
        num2.innerText = Math.floor(Math.random() * 10);
    }
    else{
        num1.innerText = Math.floor(Math.random() * 10);
        num2.innerText = Math.floor(Math.random() * 10);
    }

    
    input.value='';
})


