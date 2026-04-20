const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const select = document.getElementById("select");

const apiKey = "AIzaSyBfHfzVGeHHXtSByaUiBNgB9owRtBnn4Ik";

async function loadVoices() {
    const response = await fetch (
        `https://texttospeech.googleapis.com/v1/voices?key=${apiKey}`
    );

    const data = await response.json()

    data.voices.forEach(e => {
        if (!e.languageCodes.includes("en-US")) return;
        if (!/^[a-z]{2}-[A-Z]{2}-/.test(e.name)) return;

        console.log(e);   
        const option = document.createElement("option");

        option.value = JSON.stringify({
            name: e.name,
            lang: e.languageCodes[0]
        });

        option.textContent = `${e.name} (${e.ssmlGender})`;
        select.appendChild(option);
    })
}

loadVoices();

async function speak() {
    const selected = JSON.parse(select.value);

    const request = {
        input: {text: textarea.value},
        voice: {
            name: selected.name,
            languageCode: selected.lang
        },
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

    if (!response.ok) {
        const error = await response.json();
        console.error("TTS ERROR:", error);
        alert(error.error.message);
        return;
    }

    const audioContent = data.audioContent

    const audio = new Audio("data:audio/mp3;base64," + audioContent);
    audio.play();
}

button.addEventListener("click", () => {
    speak();
})
