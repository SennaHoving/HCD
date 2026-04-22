const buttons = document.querySelectorAll("button"); 

let selectedVoice = null;

const apiKey = "AIzaSyBfHfzVGeHHXtSByaUiBNgB9owRtBnn4Ik";

const voices = {
    "1": { languageCode: "nl-NL", name: "nl-NL-Standard-F" },
    "2": { languageCode: "nl-NL", name: "nl-NL-Standard-G" },
    "3": { languageCode: "nl-NL", name: "nl-NL-Wavenet-F" }
};

async function speak(text, person) {
    let voice = voices[person] || voices["1"]; 

    const request = {
        input: { text: text },
        voice,
        audioConfig: { audioEncoding: "MP3" }
    };

    const response = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
    );

    const data = await response.json();

    if (!response.ok) {
        console.error("TTS ERROR:", data);
        alert(data.error.message);
        return;
    }

    const audio = new Audio("data:audio/mp3;base64," + data.audioContent);
    audio.play();
}

buttons.forEach(el => {
    el.addEventListener("click", () => {
        speak(el.textContent, el.className); 
    })
})