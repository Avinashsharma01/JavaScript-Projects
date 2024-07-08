const btn=document.querySelector(".btn")
const emojiname=document.querySelector(".emojiname")
let emoji=document.querySelector(".emoji")

let url='https://emoji-api.com/emojis?access_key=1d5436aa98bb7e0f3d516cf70fe9d7c95888bc72'


let RandomN=()=>{
    return Math.floor(Math.random()*1859)
}


btn.addEventListener('click', async ()=>{
    try{
        // console.log("Hello World")
    let getdata= await fetch(url)
    getdata= await getdata.json()
    // console.log(getdata)

    // console.log(getdata[RandomN()])
    let character=getdata[RandomN()].character 
    let unicodeName=getdata[RandomN()].unicodeName
    // console.log(character)
    // console.log(unicodeName)
    emoji.innerText=character
    emojiname.innerText=unicodeName
    }
    catch{
        console.log("Api not working")
        console.log("Api limit end")
    }
}) 





        // for(let i=0; i<=getdata.length; i++){
        //     console.log(getdata[i])
        // }




  
//Another API calls  //Another API calls 
//Another API calls     //Another API calls 

        // setInterval(()=>{
        //     let h="https://cat-fact.herokuapp.com/facts"


        // let randoM=()=>{
        //     return Math.floor(Math.random()*5)
        // }

        // let cats  = async()=>{
        //     let data= await fetch(h)
        //     let dataj= await data.json()
        //     // console.log(dataj[randoM()])
        //     let text=dataj[randoM()].text
        //     console.log(text)
        // }

        // console.log(cats())
        // },4000)