// let Xpos= document.querySelector(".Xpos")
// let Ypos= document.querySelector(".Ypos")

// window.addEventListener("mouseover", (e)=>{
//     let Xposition=e.clientX
//     let Yposition=e.clientY

//     Xpos.textContent=Xposition
//     Ypos.textContent=Yposition
// })

document.addEventListener('mousemove', function (event) {
    const xPosElement = document.querySelector('.Xpos');
    const yPosElement = document.querySelector('.Ypos');

    xPosElement.textContent = event.clientX;
    yPosElement.textContent = event.clientY;
});