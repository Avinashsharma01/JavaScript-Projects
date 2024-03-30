function click(){
    let text = document.querySelector('#text')
    let a = window.speechSynthesis;
    let b = new SpeechSynthesisUtterance(`${text.value}`);
    a.speak(b);
}

