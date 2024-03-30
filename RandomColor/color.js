let body = document.querySelector("body")
let color = document.querySelector(".color")

const RandomColor = () => {
    const hex = '0123456789ABCDEF'
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
        color1 += hex[Math.floor(Math.random() * 16)]
    }
    return color1
}


const clear=setInterval(()=>{
    color.style.backgroundColor=`${RandomColor()}`
    console.log(RandomColor())
},500)


// clearInterval(clear)


// from here start a new concepts
// from here start a new concepts
// from here start a new concepts
// from here start a new concepts

body.addEventListener("keydown", (e)=>{
    console.log(e.key ===" " ? "space" : e.key)
    console.log(e.code)
    console.log(e.keyCode)
    
    if(e.keyCode=== 32){
        body.style.backgroundColor='red'
    }
    else if(e.keyCode===13){
        body.style.backgroundColor='gray'
    }
})