const loadingbaar=document.querySelector(".loadingbaar")
const percentage=document.querySelector(".percentage")

window.addEventListener("DOMContentLoaded",()=>{
    let progress=0
    setInterval(()=>{
        if(progress< 100){
            progress++
            loadingbaar.style.width=`${progress}%`
            percentage.textContent=`${progress}%`
        }
    },30)
})