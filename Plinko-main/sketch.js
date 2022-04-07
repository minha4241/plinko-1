const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var engine;
var particles = [];
var plinkos1 = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create(engine);
  world = engine.world;

  ground1 = new Ground(100, 790, 1600, 20);
 
  //to create the division objects
    for(var k = 0; k<=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight)); 
   }
 
   //creating plinko1 
   for(var j = 40; j <=width; j=j+50){
    plinkos1.push(new Plinko(j,180)); 
   }
 
   //creating plinko2
   for(var j = 15;j<=width-10; j=j+50){
    plinkos2.push(new Plinko(j,80)); 
   }
    //creating plinko3
    for(var j = 15; j<=width; j=j+50){
      plinkos3.push(new Plinko(j,280)); 
     }

   //creating plinko4  
   for(var j = 40; j <=width-10; j=j+50){
  plinkos3.push(new Plinko(j,380)); 
   }
}

function draw() {
  background(0);
  Engine.update(engine);

  //displaying the divisions
 for(var i=0;i<divisions.length; i++)
 {
   divisions[i].display();
   //console.log(i);
 }
  
 //displaying plinko1
 for(var i=0;i<plinkos1.length; i++)
 {
   plinkos1[i].display();
   //console.log(i);
 }

 //displaying plinko2
 for(var i=0;i<plinkos2.length; i++)
 {
   plinkos2[i].display();
   //console.log(i);
 }

 //displaying plinko3
 for(var i=0;i<plinkos3.length; i++)
 {
   plinkos3[i].display();
   //console.log(i);

   //creating the loop for particles
   for(var j = 0; j<particles.length;j++){
     particles[j].display();
   }

   for(var k = 0;k<divisions.length;k++){
     divisions[k].display();

   }
 }

 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}

  ground1.display();
  drawSprites();
}



