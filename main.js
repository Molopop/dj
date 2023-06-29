song = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
leftWristY = 0;
function preload(){
    Song1 = loadSound("music.mp3")
    Song2 = loadSound("y2mate.com - Lost Sky  Dreams NCS Release.mp3")
    
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreRightWrist > 0.2);
    Song1.stop()
    circle(rightWristX, rightWristY,20);
    Song2.play

    
    if(scoreLeftWrist > 0.2){
    Song2.stop();
    circle(leftWristX, leftWristY,20);
    Song1.play();
}

}
function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY ="+ rightWristY);
    }
}
