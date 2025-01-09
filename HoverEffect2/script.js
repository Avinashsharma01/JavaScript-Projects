// let container=document.querySelector(".container")

// console.log(window.innerWidth)
// console.log(window.innerHeight)


// const colors = [
//     "#FFFFFF", // White
//     "#000000", // Black
//     "#FF0000", // Red
//     "#00FF00", // Green
//     "#0000FF", // Blue
//     "#FFFF00", // Yellow
//     "#00FFFF", // Cyan
//     "#FF00FF", // Magenta
//     "#808080", // Gray
//     "#D3D3D3", // Light Gray
//     "#A9A9A9", // Dark Gray
//     "#FFA500", // Orange
//     "#FFC0CB", // Pink
//     "#800080", // Purple
//     "#A52A2A", // Brown
//     "#8B0000", // Dark Red
//     "#FFD700", // Gold
//     "#ADFF2F", // Green Yellow
//     "#4B0082", // Indigo
//     "#F08080", // Light Coral
//     "#20B2AA", // Light Sea Green
//     "#87CEFA", // Light Sky Blue
//     "#778899", // Light Slate Gray
//     "#B0C4DE"  // Light Steel Blue
// ];

// let randomC=()=>{
//     return colors[Math.floor(Math.random()*colors.length)]
// }
// // console.log(randomC())



// let setColor=(element)=>{
//     element.style.backgroundColor=randomC()
// }


// let unsetColor=(element)=>{
//     element.style.backgroundColor="rgb(32, 32, 32)"
// }



// for(let i=0; i<=8950; i++){
//     let squre=document.createElement("div")
//     squre.classList.add("squre")
//     container.appendChild(squre)

//     squre.addEventListener("mouseover",()=>{
//         setColor(squre)
//     })

//     squre.addEventListener("mouseout",()=>{
//         unsetColor(squre)
//     })
// }


let container = document.querySelector(".container");

const colors = [
    "#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF",
    "#FF00FF", "#808080", "#D3D3D3", "#A9A9A9", "#FFA500", "#FFC0CB", "#800080",
    "#A52A2A", "#8B0000", "#FFD700", "#ADFF2F", "#4B0082", "#F08080", "#20B2AA",
    "#87CEFA", "#778899", "#B0C4DE"
];

let randomC = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

let setColor = (element) => {
    element.style.backgroundColor = randomC();
};

let unsetColor = (element) => {
    element.style.backgroundColor = "rgb(32, 32, 32)";
};

for (let i = 0; i <= 8950; i++) {
    let squre = document.createElement("div");
    squre.classList.add("squre");
    container.appendChild(squre);

    squre.addEventListener("mouseover", () => {
        setColor(squre);
    });

    squre.addEventListener("mouseout", () => {
        unsetColor(squre);
    });
}