const elements = document.querySelectorAll("[data-speech]");

elements.forEach(el => {
  el.addEventListener("focus", () => {
    // Read aloud the text with the specified tone
    speech(el.dataset.emotie, el.textContent);
  });
});

function speech(emotie, text) {
    const speak = text || window.text?.value || "";
    const utterance = new SpeechSynthesisUtterance(speak);  

    switch(emotie) {
        case "normal": 
            utterance.pitch = 1;
        break; 

        case "excited": //Hoog
            utterance.pitch = 2; 
            utterance.rate = 1.5;
        break; 

        case "calm": //Laag
            utterance.pitch = 0.3; 
            utterance.rate = 0.8;
        break; 
    }

    speechSynthesis.speak(utterance);
}