const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const select = document.getElementById("select");

const apiKey = "";

async function loadVoices() {
    const response = await fetch (
        `https://texttospeech.googleapis.com/v1/voices?key=${apiKey}`
    );

    const data = await response.json()

    data.voices.forEach(e => {
        if (e.languageCodes.includes("en-US")) {
            console.log(e);   
            const option = document.createElement("option");
            option.value = e.name;
            option.textContent = e.name;
            voiceSelect.appendChild(option);
        }
    })

    select.value
}

loadVoices();

async function speak() {
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
            body: JSON.stringify(request)
        }   
    );

    const data = await response.json(); 
    const audioContent = data.audioContent

    const audio = new Audio("data:audio/mp3;base64," + audioContent);
    audio.play();
}

button.addEventListener("click", () => {
    speak();
})
