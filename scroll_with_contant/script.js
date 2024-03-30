let scrollbar=document.querySelector(".scrollbar");
let hello=document.querySelector(".hello")
window.addEventListener("scroll", ()=>{
    // console.log("ScrollY:- "+window.scrollY);
    // console.log("scroll height :- "+ document.body.scrollHeight);
    // console.log("inner height:- "+ window.innerHeight);
    let percent= (window.scrollY/ (document.body.scrollHeight-window.innerHeight))*100;
    scrollbar.style.width=percent+ '%'
    // console.log("Percentage:- "+percent);
    scrollbar.style.display='block';
    // console.log(percent)
    hello.innerText=percent.toFixed(2)+"%"
    
    
})

hello.style.textAlign='center'
hello.style.color='white'
// all console are used for debug perpose


