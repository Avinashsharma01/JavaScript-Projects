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