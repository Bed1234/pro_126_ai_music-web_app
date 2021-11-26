song = "";
song_2 = "";

function preload(){
    song = loadSound("Tera Naam.mp3");
    song_2 = loadSound("Param Sundari.mp3")
}



//creating canvas 
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
    image (video,0,0,600,500);
}


