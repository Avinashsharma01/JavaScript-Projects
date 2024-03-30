const aria=document.querySelector(".aria")
const result=document.querySelector(".result")
const result1=document.querySelector(".result1")
const result2=document.querySelector(".result2")
const btn=document.querySelector(".btn")
console.log(aria)
console.log(result)
console.log(btn)

btn.addEventListener("click", ()=>{
    if(aria.value === ""){
        alert("Please write something")
    }
    else{
        const val=aria.value
        let count=0
        for(let i=0; i<val.length; i++){
            if(val[i]==="a"|| val[i]==="e"||val[i]==="i"||val[i]==="o"||val[i]==="u"||val[i]==="A"|| val[i]==="E"||val[i]==="I"||val[i]==="O"||val[i]==="U"){
                count++
            }
        }
        result.innerHTML=count
        // console.log(count)

        // const val=aria.value
        let count1=0
        for(let i=0; i<val.length; i++){
            if(val[i]==='b'||val[i]==='c'||val[i]==='d'||val[i]==='f'||val[i]==='g'||val[i]==='h'||val[i]==='j'||val[i]==='k'||val[i]==='l'||val[i]==='m'||val[i]==='n'||val[i]==='p'||val[i]==='q'||val[i]==='r'||val[i]==='s'||val[i]==='t'||val[i]==='v'||val[i]==='w'||val[i]==='x'||val[i]==='y'||val[i]==='z'){
                count1++
                // console.log(i)
            }
        }
        result1.innerHTML=count1
        result.style.color='blue'

        // let temp=0
        // for(let i=0; i<val.length; i++){
        //     if(val[i]=== "/[a-zA-Z]/"){
        //         temp=temp+1
        //     }
        // }


        let temp = 0;
            for (let i = 0; i < val.length; i++) {
            if (/[a-zA-Z]/.test(val[i])) {
            temp = temp + 1;
    }
}
        result2.innerHTML=temp
    }
})
