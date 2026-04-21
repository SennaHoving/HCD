const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const select = document.getElementById("select");
const text = document.getElementById("text").textContent;

let selectedVoice = null;

const apiKey = "";

const voiceIcons = {
    "en-US-Polyglot-1": "🌐",
    "en-US-Neural2-G": "🎤",
    "en-US-Chirp-HD-D": "🎶",
    "en-US-Chirp-HD-F": "✨"
};

async function loadVoices() {
    const response = await fetch(
        `https://texttospeech.googleapis.com/v1/voices?key=${apiKey}`
    );

    const data = await response.json();

    data.voices.forEach(e => {
        if (!e.languageCodes.includes("en-US")) return;
        if (!/^[a-z]{2}-[A-Z]{2}-/.test(e.name)) return;

        if (
            e.name !== "en-US-Polyglot-1" &&
            e.name !== "en-US-Neural2-G" &&
            e.name !== "en-US-Chirp-HD-D" &&
            e.name !== "en-US-Chirp-HD-F"
        ) return;

        const div = document.createElement("div");
        div.className = "voice-item";
        div.dataset.name = e.name;
        div.dataset.lang = e.languageCodes[0];

        const icon = voiceIcons[e.name] || "🔊";
        div.textContent = `${icon} ${e.name}`;

        div.addEventListener("click", () => {
            document.querySelectorAll(".voice-item").forEach(i => i.classList.remove("active"));
            div.classList.add("active");

            selectedVoice = {
                name: div.dataset.name,
                lang: div.dataset.lang
            };
        });

        select.appendChild(div);
    });
}

loadVoices();

async function speak() {
    if (!selectedVoice) {
        alert("Please select a voice first.");
        return;
    }

    const request = {
        input: { text: text },
        voice: {
            name: selectedVoice.name,
            languageCode: selectedVoice.lang
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

button.addEventListener("click", () => {
    speak();
})
