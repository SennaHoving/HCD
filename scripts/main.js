const textarea = document.getElementById("textarea");
const button = document.getElementById("button");

const apiKey = "";

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

    //List 
    const textToSpeech = require('@google-cloud/text-to-speech');

    const client = new textToSpeech.TextToSpeechClient();

    const [result] = await client.listVoices({});
    const voices = result.voices;

    console.log('Voices:');
    voices.forEach(voice => {
        console.log(`Name: ${voice.name}`);
        console.log(`  SSML Voice Gender: ${voice.ssmlGender}`);
        console.log(`  Natural Sample Rate Hertz: ${voice.naturalSampleRateHertz}`);
        console.log('  Supported languages:');
        voice.languageCodes.forEach(languageCode => {
            console.log(`    ${languageCode}`);
        });
    });
}

button.addEventListener("click", () => {
    speak();
})
