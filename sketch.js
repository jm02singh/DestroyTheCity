const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var myEngine,myWorld 
var ground
var box1,box2,box3,box4,box5,box6,box7,box8
var ball
var sling
var monster
var stool
var gameState = "onSling";


function preload() {
  background1 = loadImage("background.jpeg")
  background2 = loadImage("background2.jpg")
  }


function setup() { 
  var canvas = createCanvas(1500,800); 
  myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  ground = new Ground(750,790,1500,50)

  ball = new Ball(450,50,100,100)
  ball2 = new Ball(550,50,100,100)
  ball3 = new Ball(650,50,100,100)
  ball4 = new Ball(750,50,100,100)
  ball5 = new Ball(850,50,100,100)
  
  //sling = new Slingshot(ball.body,{x: 550, y: 0})
  //sling2 = new Slingshot(ball2.body,{x: 550, y: 0})
  //sling3 = new Slingshot(ball3.body,{x: 550, y: 0})
  //sling4 = new Slingshot(ball4.body,{x: 550, y: 0})
  //sling5 = new Slingshot(ball5.body,{x: 550, y: 0})

  //stool = new Box(1400, 390, 300, 300)

  //monster = new Monster(1400, 330, 400, 400)

  box1 = new Box(90, 720, 80, 400)
  box2 = new Box2(150, 720, 80, 400)
  box3 = new Box(250, 720, 80, 500)
  box4 = new Box3(300, 720, 80, 400)
  box5 = new Box2(470, 720, 80, 300)
  box6 = new Box(500, 720, 80, 300)

  box7 = new Box(650, 620, 80, 500)
  box8 = new Box3(700, 620, 80, 300)
  box9 = new Box(860, 620, 80, 300)
  box10 = new Box2(900, 620, 80, 500)
  box11 = new Box3(1000, 620, 80, 300)

  box12 = new Box(800, 720, 80, 400)
  box13 = new Box2(850, 720, 80, 400)
  box14 = new Box(900, 720, 80, 900)
  box15 = new Box3(950, 720, 80, 700)
  box16 = new Box2(1000, 720, 80, 300)
  box17 = new Box(1050, 720, 80, 300)

} 
  function draw() {
    if(box12.X>1200){
      background(background2); 
    }

     background(background1); 
     Engine.update(myEngine) 
     ground.display();
     ball.display();
     ball2.display();
     ball3.display();
     ball4.display();
     ball5.display();
     //monster.display();
     //sling.display();
     //sling2.display();
     //sling3.display();
     //sling4.display();
     //sling5.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     
     
     
  }
  
  

     //function mouseDragged(){
    //  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
     // Matter.Body.setPosition(ball2.body, {x: mouseX, y: mouseY})
     // Matter.Body.setPosition(ball3.body, {x: mouseX, y: mouseY})
     // Matter.Body.setPosition(ball4.body, {x: mouseX, y: mouseY})
     // Matter.Body.setPosition(ball5.body, {x: mouseX, y: mouseY})
   // }

    function keyPressed(){
      if(keyCode === 32){
        Matter.Body.setStatic(ball.body,false)
        Matter.Body.setStatic(ball2.body,false)
        Matter.Body.setStatic(ball3.body,false)
        Matter.Body.setStatic(ball4.body,false)
        Matter.Body.setStatic(ball5.body,false)
      }
  }

    

