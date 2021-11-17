song = "";
song_2 = "";

function preload(){
    song = loadSound("Tera Naam Tulsi Kumar 128 kbps.mp3");
    song_2 = loadSound("Param Sundari Mimi 128 kbps.mp3")
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

function play() {
    song.play();
    
}
