const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    }, {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
];

let myquestion=document.querySelector(".myquestion");
console.log(myquestion);
console.log(myquestion.textContent);

let label1=document.querySelector("#label-1");
let label2=document.querySelector("#label-2");
let label3=document.querySelector("#label-3");
let label4=document.querySelector("#label-4");

console.log(label1);
console.log(label1.textContent);

let submit=document.querySelector("#submit");
console.log(submit);
console.log(submit.textContent);

let start=0;
let score=0;
// console.log(quiz[start].question);
// console.log(quiz[start].ans1text);
// console.log(quiz[start].ans2text);
// console.log(quiz[start].ans3text);
// console.log(quiz[start].ans4text);

myquestion.innerText=quiz[start].question;
label1.innerText=quiz[start].ans1text;
label2.innerText=quiz[start].ans2text;
label3.innerText=quiz[start].ans3text;
label4.innerText=quiz[start].ans4text;

submit.addEventListener("click", ()=>{
    let checked=document.querySelector('input[type="radio"]:checked');
    console.log(checked);
    console.log("Hello World")
    // console.log(checked.nextElementSibling.innerText);
    if(checked===null){
        alert("You have to check the answer");
    }
    else{
        if(checked.nextElementSibling.innerText===quiz[start].answer){
            score++;
        }
        else{
            start++;
            if(start<quiz.length){
                myquestion.innerText=quiz[start].question;
                label1.innerText=quiz[start].ans1text;
                label2.innerText=quiz[start].ans2text;
                label3.innerText=quiz[start].ans3text;
                label4.innerText=quiz[start].ans4text;
                checked.checked=false;
            }
            else{
                alert("Your score is" + score + "out of"+ quiz.length);
                location.reload();
            }
        }
    }
});
