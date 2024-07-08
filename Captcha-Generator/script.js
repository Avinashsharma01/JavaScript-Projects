let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
let container=document.querySelector(".container")
let captcha=document.querySelector(".captcha")
let input=document.querySelector(".input")
let submit=document.querySelector(".submit")
let refresh=document.querySelector(".refresh")

console.log(char)
console.log(container)
console.log(captcha)
console.log(input)
console.log(submit)
console.log(refresh)


let generateCaptcha=()=>{
    let gen_captcha=""
    for(let i=0; i<=6; i++){
        gen_captcha+=char[Math.floor(Math.random()*char.length)]
    }
}

console.log(generateCaptcha())