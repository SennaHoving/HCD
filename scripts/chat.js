const buttons = document.querySelectorAll(".group-chat > div:first-of-type button"); 

let currentVoice = null; 
let selectedVoice = null;

const apiKey = "AIzaSyBfHfzVGeHHXtSByaUiBNgB9owRtBnn4Ik";

const voices = {
    "v1": { languageCode: "nl-NL", name: "nl-NL-Chirp3-HD-Achernar" },
    "v2": { languageCode: "nl-NL", name: "nl-NL-Standard-G" },
    "v3": { languageCode: "nl-NL", name: "nl-NL-Standard-F" },
    "v4": { languageCode: "nl-NL", name: "nl-NL-Standard-F" },
    "v5": { languageCode: "nl-NL", name: "nl-NL-Standard-F" },
};

const voiceStyles = {
    v1: { pitch: 0.0, speakingRate: 1.0 }, 
    v2: { pitch: 0.0, speakingRate: 1.0 }, 
    v3: { pitch: 0.0, speakingRate: 1.0 },   // normal
    v4: { pitch: 6.0, speakingRate: 1.2 },   // excited
    v5: { pitch: -8.0, speakingRate: 0.8 }   // angry
};

async function speak(text, person) {
    let voice = voices[person] || voices["v1"];
    const style = voiceStyles[person] || voiceStyles.v1; 

    const request = {
        input: { text: text },
        voice,
        audioConfig: { 
            audioEncoding: "MP3", 
            pitch: style.pitch,
            speakingRate: style.speakingRate
        }
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

    //Zet vorige voice op pauze
    if (currentVoice) {
        currentVoice.pause(); 
        currentVoice.currentTime = 0; 
    } 

    currentVoice = new Audio("data:audio/mp3;base64," + data.audioContent);
    currentVoice.play();
}

document.addEventListener("focusin", (e) => {
    if (e.target.matches(".group-chat > div:first-of-type button")) {
        speak(e.target.textContent, e.target.className);
    }
});

document.addEventListener("click", (e) => {
    if (e.target.matches(".group-chat > div:first-of-type button")) {
        speak(e.target.textContent, e.target.className);
    }
});

const text = document.getElementById("text");
const chatContainer = document.getElementById("chatContainer");
const sendButton = document.getElementById("sendButton");

const voiceSettings = document.getElementById("voiceSettings");

sendButton.addEventListener("click", () => {
    const nieuwText = document.createElement("div"); 
    nieuwText.classList.add("text-bubble");

    const setting = voiceSettings.querySelector('input[name="setting"]:checked').value;

    nieuwText.innerHTML = `
        <div class="${setting}"></div>
        <button aria-hidden="true" tabindex="0" role="button" class="${setting}">${text.value}</button>
    `

    if (!(text.value == "")) {
        chatContainer.appendChild(nieuwText); 
    }


    text.value = ""; 

    console.log(text.value);
})

//Focus tab when opening settings display 
const toggle = document.querySelector("#voiceSettings input[type='checkbox']");
const panel = document.querySelector("#voiceSettings > div");

panel.addEventListener("focusout", (e) => {
    setTimeout(() => {
        const stillInside = panel.contains(document.activeElement);

        if (!stillInside) {
            toggle.checked = false;
        }
    }, 0);
});