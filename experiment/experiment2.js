const data=[
    {
        Name:"Avinash Kumar Sharma",
        Age:21,
        Email:"Avinashsharma31384@gmail.com",
        password:123456789,
        Mobile_No: 6201693634,
    },
    {
        Name:"Soumya Sharma",
        Age:19,
        Email:"Kumarisoumya204@gmail.com",
        password:123456789,
        Mobile_No: 7970767217,
    },
    {
        Name:"Brijesh Sharma",
        Age:19,
        Email:"BrijeshSharma123@gmail.com",
        password:123456789,
        Mobile_No: 9065393814,
    },
    {
        Name:"Rahul Sharma",
        Age:19,
        Email:"RahulSharma123@gmail.com",
        password:123456789,
        Mobile_No: 9065393814,
    },
    {
        Name:"Anup Sharma",
        Age:19,
        Email:"Anupsharma123@gmail.com",
        password:123456789,
        Mobile_No: 93457349857,
    }
]

let start=0;
let a1=document.querySelector(".a1").innerText=data[start].Name;
let a2=document.querySelector(".a2").innerText=data[start].Age;
let a3=document.querySelector(".a3").innerText=data[start].Email;
let a4=document.querySelector(".a4").innerText=data[start].password;
let a5=document.querySelector(".a5").innerText=data[start].Mobile_No;
let next=document.querySelector(".next");
let previous=document.querySelector(".previous")
next.addEventListener("click", ()=>{
    start++
    if(start===data.length){
        location.reload();
        alert("This is the last")
    }
    let a1=document.querySelector(".a1").innerText=data[start].Name;
    let a2=document.querySelector(".a2").innerText=data[start].Age;
    let a3=document.querySelector(".a3").innerText=data[start].Email;
    let a4=document.querySelector(".a4").innerText=data[start].password;
    let a5=document.querySelector(".a5").innerText=data[start].Mobile_No;
})
previous.addEventListener("click", ()=>{
    start--
    if(start<=-1){
        // alert("This is the index no 0")
        alert("BSDK itna hi hai")
    }
    let a1=document.querySelector(".a1").innerText=data[start].Name;
    let a2=document.querySelector(".a2").innerText=data[start].Age;
    let a3=document.querySelector(".a3").innerText=data[start].Email;
    let a4=document.querySelector(".a4").innerText=data[start].password;
    let a5=document.querySelector(".a5").innerText=data[start].Mobile_No;
})
console.log(previous)



// start++
// let b1=document.querySelector(".b1").innerText=data[start].Name;
// let b2=document.querySelector(".b2").innerText=data[start].Age;
// let b3=document.querySelector(".b3").innerText=data[start].Email;
// let b4=document.querySelector(".b4").innerText=data[start].password;
// let b5=document.querySelector(".b5").innerText=data[start].Mobile_No;
// start++
// let c1=document.querySelector(".c1").innerText=data[start].Name;
// let c2=document.querySelector(".c2").innerText=data[start].Age;
// let c3=document.querySelector(".c3").innerText=data[start].Email;
// let c4=document.querySelector(".c4").innerText=data[start].password;
// let c5=document.querySelector(".c5").innerText=data[start].Mobile_No;
// start++
// let d1=document.querySelector(".d1").innerText=data[start].Name;
// let d2=document.querySelector(".d2").innerText=data[start].Age;
// let d3=document.querySelector(".d3").innerText=data[start].Email;
// let d4=document.querySelector(".d4").innerText=data[start].password;
// let d5=document.querySelector(".d5").innerText=data[start].Mobile_No;
// start++
// let e1=document.querySelector(".e1").innerText=data[start].Name;
// let e2=document.querySelector(".e2").innerText=data[start].Age;
// let e3=document.querySelector(".e3").innerText=data[start].Email;
// let e4=document.querySelector(".e4").innerText=data[start].password;
// let e5=document.querySelector(".e5").innerText=data[start].Mobile_No;
