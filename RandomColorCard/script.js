let container=document.querySelector(".container")

// let hex=["0","1","2","3",'4',"5","6","7","8","9","A","B","C","D","E","F"]
let hex="0123456789ABCDEF"   


let index=()=>{
    return Math.floor(Math.random() * 16); 
}


for(let i=1; i<50; i++ ){
    let box= document.createElement("div")
    box.classList.add("box-color")

    let color="#"
    for(let i=0; i<6; i++){
        color += hex[index()]
    }
    
    box.textContent=color
    box.style.backgroundColor=color

    container.appendChild(box)
}




