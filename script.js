document.addEventListener('DOMContentLoaded', function() {
let speech = new SpeechSynthesisUtterance();

//Array to store available voices
let voices = [];

// Select the element in HTML
let voiceSelect =document.querySelector("select");

//event listener for when voice changes
window.speechSynthesis.onvoiceschanged = () =>{

    //Get all available voices
    voices = window.speechSynthesis.getVoices();
    //Set default voice for the SpeechSynthesisUtterrance
    speech.voice = voices[0];
    //Populate the voiceSelect dropdown with available voices
    voices.forEach((voices, i) => (voiceSelect.options[i] = new Option(voices.name, i)));   
};
//Event listener for when the user changes the selected voice
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

//Event listener for when the user clicks the button
document.querySelector(".icon-btn").addEventListener("click", () => {
    //Set the text of the SpeechSynthesisUtterance to the content of the <textarea>
    speech.text = document.querySelector("textarea").value;
    //Use speechSynthesis to speak the provided text
    speechSynthesis.speak(speech);
});
});
