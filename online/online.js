let online=document.querySelector(".online");
console.log(online);

window.addEventListener("offline",()=>{
    online.innerHTML='You are offline.'
    online.style.color='red'
});

window.addEventListener('online',()=>{
    online.innerHTML='You are online.'
    online.style.color='lime'
});

