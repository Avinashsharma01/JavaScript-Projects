const imageContainer = document.querySelector(".image-container")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")


let count = 1
let width = 500


next.addEventListener("click", () => {
    if (count < 17) {
        count++
        imageContainer.style.transform = `translateX(-${width * count}px)`
        console.log(count)
    }
})


prev.addEventListener("click", () => {
    if (count > 0) {
        count--
        imageContainer.style.transform = `translateX(-${width * count}px)`
        console.log(count)
    }
})


// setInterval(()=>{
//     if (count < 18) {
//         count++
//         imageContainer.style.transform = `translateX(-${width * count}px)`
//         console.log(count)
//     }else{
//         count=0
//     }
// },1000)