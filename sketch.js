const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour=13;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    /*bg = loadImage("sunrise1.png");
    bg = loadImage("sunrise2.png");
    bg = loadImage("sunrise3.png");
    bg = loadImage("sunrise4.png");
    bg = loadImage("sunrise5.png");
    bg = loadImage("sunrise6.png");
    bg = loadImage("sunset7.png");
    bg = loadImage("sunset8.png");
    bg = loadImage("sunset9.png");
    bg = loadImage("sunset10.png");
    bg = loadImage("sunset11.png");
    bg = loadImage("sunset12.png");*/

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here
    text("Time: "+ hour,200,200);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    
    // write code slice the datetime
    var hour = dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>04 && hour<06){
        bg="sunrise1.png";
    }
    else if(hour>06 && hour<08){
        bg="sunrise2.png";
    }
    else if(hour>08 && hour<10){
        bg="sunrise3.png";
    }
    else if(hour>10 && hour<12){
        bg="sunrise5.png";
    }
    else if(hour>14 && hour<016){
        bg="sunrise6.png";
    }
    else if(hour>16 && hour<18){
        bg="sunset7.png";
    }
    else if(hour>18 && hour<20){
        bg="sunset8.png";
    }
    else if(hour>20 && hour<22){
        bg="sunset11.png";
    }
    else if(hour>23 && hour<00){
        bg="sunset12.png";
    }
    



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
