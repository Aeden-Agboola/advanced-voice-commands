x = 0;
y = 0;
screen_width = 0;
screen_height =0;
apple = "";
speak_data = to_number +"Apples drawn";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

function preload() {
  apple = loadImage("apple.png")
}
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple"
      draw_apple = "set"
    }
    else{
      document.getElementById("status").innerHTML="the speech has not recognized a number".
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight
  canvas = createCanvas()
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


