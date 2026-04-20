// const elements = document.querySelectorAll("[data-speech]");
// const pitchElement = document.getElementById("pitch")
// const rateElement = document.getElementById("rate")

// elements.forEach(el => {
//   el.addEventListener("focus", () => {
//     // Read aloud the text with the specified tone
//     speech(el.dataset.emotie, el.textContent);
//   });
// });

// document.querySelectorAll(".read-btn").forEach(button => {
//     button.addEventListener("click", () => {
//         const textElement = button.previousElementSibling;
//         const emotie = textElement.dataset.emotie;
//         const text = textElement.textContent;
//         speech(emotie, text);
//     });
// });

// function speech(emotie, text) {
//     const speak = text || window.text?.value || "";
//     const utterance = new SpeechSynthesisUtterance(speak);  

//     switch(emotie) {
//         case "normal": 
//             utterance.pitch = pitchElement.value;
//             utterance.rate = rateElement.value;
//         break;  

//         case "excited": //Hoog
//             utterance.pitch = 2; 
//             utterance.rate = 1.5;
//         break; 

//         case "calm": //Laag
//             utterance.pitch = 0.3; 
//             utterance.rate = 0.8;
//         break; 
//     }

//     speechSynthesis.speak(utterance);
// }


const textarea = document.getElementById("textarea");
const button = document.getElementById("button");

const apiKey = "";

button.addEventListener("click", async () => {
    const request = {
        input: {text: textarea.value},
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        audioConfig: {audioEncoding: 'MP3'},
    }

    const response = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        }   
    );

    const data = await response.json(); 
    const audioContent = data.audioContent

    const audio = new Audio("data:audio/mp3;base64," + audioContent);
    audio.play();
})
