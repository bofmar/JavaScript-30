window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("");
  p.textContent = transcript;
  if(e.results[0].isFinal){
    p = document.createElement('p');
    words.appendChild(p);
  }
  if(transcript.includes("weather")){
    window.open("https://www.accuweather.com/en/cy/famagusta/122484/weather-forecast/122484"),"_blank";
  }
  if(transcript.includes("Wikipedia")){
    window.open("https://www.wikipedia.org/","_blank");
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();