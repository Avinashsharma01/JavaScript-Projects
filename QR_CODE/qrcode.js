let qrinput=document.querySelector(".qrinput");
let qrbutton=document.querySelector(".qrbutton");
let qrimg=document.querySelector(".qrimg");
// console.log(qrimg, qrbutton, qrinput);
let download=document.querySelector(".download");
let body=document.querySelector("body");
qrbutton.addEventListener('click', ()=>{
    let inputvalue=qrinput.value;
    console.log(inputvalue)

    if(!inputvalue){
        alert("Please write down something")
        return;
    }
    else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        qrimg.alt=`QR code for${inputvalue}`
    }
})



