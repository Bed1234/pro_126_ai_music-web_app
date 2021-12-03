song = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY =0;


left_wrist_score = 0;
right_wrist_score = 0;
//song_status1 = "Tera Naam.mp3";
//song_status2 = "";

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
 //initializing  poseNet model
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        left_wrist_score = results[0].pose.keypoints[9].score;
        right_wrist_score = results[0].pose.keypoints[10].score;
        console.log(" right_wrist_score = " + right_wrist_score + "left_wrist_score" + left_wrist_score );

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX = "+ leftWristX +  " leftWristY = " +  leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(" rightWristX = "+rightWristX +  " rightWristY = " + rightWristY);

        

    } 
}


//var song_status1 = song;
//var song_status2 = song_2;
function draw(){
    image (video,0,0,600,500);

    
    fill ("#FF0000");
    stroke ("#FF0000");
   


    if( left_wrist_score > 0.2){
    circle( leftWristX , leftWristY , 20 );
    song_2.stop();
    song.play();

    }

   // if(song_status2 == false ){
       // song.play();
        //document.getElementById("lbl_song_name").innerHTML = "song = " + "Tera Naam";
//  }

}


