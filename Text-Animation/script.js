let animatedText=document.querySelector(".animatedText")
let text="Hey Guys my name is Avinash Kumar Sharma and i am a b tech second year student "

// console.log(text.substring(0,1))
// for(let i=0; i<=text.length; i++){
//     // console.log(text.substring(0,i))
//     animatedText.textContent=text.substring(0,i)
   
// }




// let i=0
// function textAni(){
//     animatedText.textContent=text.substring(0,i)
//     i++
//     setTimeout(textAni,50)
// }

// textAni()




    let j=0
    let speedAni=()=>{
        animatedText.textContent=text.substring(0,j)
        j++

        if(j>text.length){
            j=0
        }
        setTimeout(speedAni, 20)
    }
    
    speedAni()
