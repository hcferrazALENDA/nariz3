noseX=0
noseY=0

function preload(){
clownNose = loadImage('nariz1.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
image(video,0,0,300,300)
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX, noseY, 20);
image(clownNose, noseX, noseY, 30, 30);
}
function takeSnapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nariz x = " + nose.x);
        console.log("nariz y = " + nose.y);
       
    }
}





