let input_field = document.querySelector('.input_field');
let maxnumber = document.querySelector('.maxnumber');
let upper = document.querySelector('.upper');
let lower = document.querySelector('.lower');
let number = document.querySelector('.number');
let symbol = document.querySelector('.symbol');
let copy = document.querySelector('.btn');
let generate = document.querySelector('.generate');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let Number = '1234567890';
let Symbol = '~!@#$%^&*()_+-';
// let password='';
generate.addEventListener('click', () => {
    let str = '';
    if (upper.checked) {
        str += uppercase;
    }
    if (lower.checked) {
        str += lowercase;
    }
    if (number.checked) {
        str += Number;
    }
    if (symbol.checked) {
        str += Symbol;
    }
    // console.log(str)
    let password = '';
    for (let i = 0; i < maxnumber.value; i++) {
        // console.log(str.length)
        let index = Math.floor(Math.random() * str.length);
        // password += str[index];
        password=password+str[index];
        // +=	x += y	x = x + y
    }
    // console.log(password);
    input_field.value = password;
})


copy.addEventListener('click', () => {
    console.log(input_field.value);
    input_field.select();
    input_field.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input_field.value);
    alert("Copied the text: " + input_field.value);
})






let qrinput=document.querySelector(".qrinput");
let qrbutton=document.querySelector(".qrbutton");
let qrimg=document.querySelector(".qrimg");
// console.log(qrimg, qrbutton, qrinput);


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











let textinput=document.querySelector('.textinput');
let output=document.querySelector('.output');


textinput.addEventListener('input', ()=>{
    let password=textinput.value;
    if(password.length <= 8){
        output.innerText= `Password is too short`
        output.style.color='red'
    }
    else{
        output.innerText=`password is long enough`
        output.style.color='lime'

        if(password.search(/[a-z]/) == -1){
            output.innerText=`lower case missing here`
            output.style.color='red'
        }
        else if(password.search(/[A-Z]/) == -1){
            output.innerText=`upper case missing here`
            output.style.color='red'
        }
        else if(password.search(/[0-9]/) == -1){
            output.innerText=`Number is  missing here`
            output.style.color='red'
        }
        else if(password.search(/[ !\”\#\$\%\&\’\(\)\*\+\,\-\.\/\<\>\?\:\;\[\]\@\ ]/) == -1){
            output.innerText=`Special character is missing`
            output.style.color='red'
        }
        else{
            output.innerText=`Password is strong`
        }
    }
})


// !\”\#\$\%\&\’\(\)\*\+\,\-\.\/\<\>\?\:\;\[\]\@\