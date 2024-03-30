const input=document.querySelector('.inputkg');
const output=document.querySelector('.result');

input.addEventListener("input", ()=>{
    let val=input.value;
    let out;
    out=val*2.2;
     output.innerText=out.toFixed(2)
})