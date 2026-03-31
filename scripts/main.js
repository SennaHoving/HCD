const text = document.getElementById("text-input") || "Welkom tot deze website"; 

function speech(emotie) {
    const utterance = new SpeechSynthesisUtterance(text.value); 

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

    console.log(text.value)
    speechSynthesis.speak(utterance);
}