let Xpos= document.querySelector(".Xpos")
let Ypos= document.querySelector(".Ypos")

window.addEventListener("mouseover", (e)=>{
    let Xposition=e.clientX
    let Yposition=e.clientY

    Xpos.textContent=Xposition
    Ypos.textContent=Yposition
})