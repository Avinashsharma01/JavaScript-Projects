let container=document.querySelector(".container")
let squre=document.querySelectorAll(".squre")
console.log(container)
console.log(squre)
const colors = [
    "#FFFFFF", // White
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#808080", // Gray
    "#D3D3D3", // Light Gray
    "#A9A9A9", // Dark Gray
    "#FFA500", // Orange
    "#FFC0CB", // Pink
    "#800080", // Purple
    "#A52A2A", // Brown
    "#8B0000", // Dark Red
    "#FFD700", // Gold
    "#ADFF2F", // Green Yellow
    "#4B0082", // Indigo
    "#F08080", // Light Coral
    "#20B2AA", // Light Sea Green
    "#87CEFA", // Light Sky Blue
    "#778899", // Light Slate Gray
    "#B0C4DE"  // Light Steel Blue
];


let randomC=(colors)=>{
    return colors[Math.floor(Math.random()*colors.length)]
}

let setColor=(element)=>{
    element.style.backgroundColor=randomC(colors)
}

let unsetColor=(element)=>{
    element.style.backgroundColor='rgb(52, 51, 51)'
}



for(let i=0; i<=593; i++){
    let squre=document.createElement("div")
    squre.classList.add("squre")
    container.appendChild(squre)


    squre.addEventListener("mouseover",()=>{
        setColor(squre)
    })

    squre.addEventListener("mouseout",()=>{
        unsetColor(squre)
    })
}