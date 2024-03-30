const sheet= [
    {
        Name:"Avinash Kumar Sharma",
        Age:21,
        Email:"Avinashsharma31384@gmail.com",
        password:123456789,
        Mobile_No: 6201693634,
    },
];


let a=document.querySelector(".Avi1");
let b=document.querySelector(".Avi2");
let c=document.querySelector(".Avi3");
let d=document.querySelector(".Avi4");
let e=document.querySelector(".Avi5");
console.log(a,b,c,d,e);
let start=0;
console.log(sheet[start].Name);
a.innerText=sheet[start].Name;
b.innerText=sheet[start].Age;
c.innerText=sheet[start].Email;
d.innerText=sheet[start].password;
e.innerText=sheet[start].Mobile_No;




// For second 

const sheet1=[
    {
        Name:"Soumya Sharma",
        Age:19,
        Email:"Kumarisoumya204@gmail.com",
        password:123456789,
        Mobile_No: 7970767217,
    },
];
let currect=0;
let A=document.querySelector(".Avinash1")
let B=document.querySelector(".Avinash2")
let C=document.querySelector(".Avinash3")
let D=document.querySelector(".Avinash4")
let E=document.querySelector(".Avinash5")
console.log(A,B,C,D,E);
A.innerText=sheet1[currect].Name
B.innerText=sheet1[currect].Age
C.innerText=sheet1[currect].Email
D.innerText=sheet1[currect].password
E.innerText=sheet1[currect].Mobile_No


