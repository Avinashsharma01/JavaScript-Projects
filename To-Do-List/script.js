let input=document.querySelector("#input")
let listContainer=document.querySelector("#list-container")


function addtask(){
    if(input.value=== ""){
        alert("You must write somthing")
    }else{
        let li=document.createElement("li")
        // li.classList.add("checked")
        li.innerHTML=input.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
    saveData()
}

window.addEventListener("keydown", (e)=>{
    if(e.key=== "Enter"){
        addtask()
    }
})


listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function shawData(){
    listContainer.innerHTML=localStorage.getItem("data")
}
shawData()