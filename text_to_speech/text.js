function TextToSpeech() {
    let text = document.querySelector('#text')
    let a = window.speechSynthesis;
    let b = new SpeechSynthesisUtterance(`${text.value}`);
    a.speak(b);
}

let textareaa = document.querySelector("textarea")

// textareaa.addEventListener('click', TextToSpeech);
textareaa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        TextToSpeech();
    }
});