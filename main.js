function preload(){

}

function setup(){
Canvas=createCanvas(400,400);
Canvas.center();
video=createCapture(VIDEO)
video.hide()

}

function draw(){
image(video,52,52,300,300);
fill(0, 153, 51)
circle(15,15,30)
circle(15,385,30)
circle(385,15,30)
circle(385,385,30)
fill(255, 51, 0)
rect(30,0,340,30)
rect(370,30,30,340)
rect(30,370,340,30)
rect(0,30,30,340)
}

function take_snapshot(){
    save('download_img_png');
}
