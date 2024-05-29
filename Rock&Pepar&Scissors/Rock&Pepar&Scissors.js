let winner=document.querySelector(".winner")
let userScorepara=document.querySelector(".userScore")
let computerScorepara=document.querySelector(".computerScore")

let userScore=0
let computerScore=0

let choices=document.querySelectorAll(".choice")
console.log(choices)

choices.forEach((e)=>{
    console.log(e)
    e.addEventListener('click',()=>{
        const getID=e.getAttribute("id")
        playGame(getID)
    })
})



let computerChoice=()=>{
    let arrayChoice=['rock','pepar','scissor']
    let randomChoice=Math.floor(Math.random()*3)
    return arrayChoice[randomChoice]
}


let showresult=(AvinashWin)=>{
    if(AvinashWin){
        userScore++
        userScorepara.innerText=userScore
        console.log("You Win.")
        winner.innerText="You Win."
        winner.style.backgroundColor='Green'
    }
    else{
        computerScore++
        computerScorepara.innerText=computerScore
        console.log("Computer Win.")
        winner.innerText="Computer Win."
        winner.style.backgroundColor='red'
    }
}

let playGame=(user)=>{
    let userChoice=user
    let computer = computerChoice()
    console.log("this is user:- ",userChoice)
    console.log("this is com:- ",computer)
    if(userChoice===computer){
        console.log("The Game Is Drow.")
        winner.innerText="The Game Is Drow."
        winner.style.backgroundColor='blue'
    }
    else{
        let userwin=true
        if(userChoice==='rock'){
            userwin= computer==='pepar'?false:true
        }else if(userChoice==='pepar'){
            userwin=computer==='scissor'?false:true
        }
        else{
            userwin=computer==='rock'?false:true
        }
        showresult(userwin)
    }
}












