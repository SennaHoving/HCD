const buttons = document.querySelectorAll("button"); 

let selectedVoice = null;

const apiKey = "AIzaSyBfHfzVGeHHXtSByaUiBNgB9owRtBnn4Ik";

async function speak(text) {
    const request = {
        input: { text: text },
        "voice": {
            "languageCode": "en-US",
            "name": "en-US-Neural2-C"
        },
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
        console.log(el.textContent)
        speak(el.textContent); 
    })
})