function preload() {
 
}
    
function setup() {
    createCanvas(500,500);
    canvas.position(120,270);
    video = createCapture(VIDEO);
    video.hide();
    text_color="";
    }
    
function draw() {
    image(video,0,0,500,500);
    tint(text_color);

    }

function filter(){
    text_color= document.getElementById("Color_Name").value;
}

function take_snapshot(){
    save("filter_image.png");
}