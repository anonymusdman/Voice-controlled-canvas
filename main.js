x=0;
y=0;
draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System has recognized speech as: " + content;

    if(content=="Circle"){
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content=="Rectangle"){
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    console.log(x,y);
}
function setup(){
    createCanvas(900, 600);
}
function draw(){
    if(draw_circle == "set"){
        var x=Math.floor(Math.random * 900);
        var y=Math.floor(Math.random * 600);
        radius = Math.floor(Math.random * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
        console.log(x, y);
    }
    if(draw_rect == "set"){
        var x=Math.floor(Math.random * 900);
        var y=Math.floor(Math.random * 600);
        radius = Math.floor(Math.random * 100);
        rectangle(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
        console.log(x,y);
    }
}