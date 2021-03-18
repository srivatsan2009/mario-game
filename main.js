function preload() {
world_start = loadSound("world_start.wav");
setSprites();
MarioAnimation();
}

function setup() {
canvas = createCanvas(1240,336);
canvas.parent("canvas");
instializeInSetup(mario);
video=createCapture(VIDEO);
video.size(800,400);
video.parent("game_console");
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',getposes);
}

function modeloaded() {
console.log("modeloaded");
}

function getposes(results) {
if (results.length>0) {
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
}
}

function draw() {
game()
}






