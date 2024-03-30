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