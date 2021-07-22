
var sea1, flow;
var map1, go;
var ship, moving;
let bg;
var japan, coolit;
var ignore1, fofo;
condition = "cool"
coo = "start";
var firstext, logo;
var bat1;
var bat2;
var ball;
var japans1, animation;
var japans15, bg1;
var aquarium, bg2;
var flower, bg3;
let timer = 5;

function preload(){
  flow = loadAnimation ("sea.png");
  moving = loadAnimation ("ship-1.png", "ship-3.png", "ship-4.png");
  coolit = loadAnimation ("d58cu06-3ff9b2c3-c953-456e-8355-ed0d7e1d984d.png");
  fofo = loadAnimation ("d58cu06-3ff9b2c3-c953-456e-8355-ed0d7e1d984d.png");
  logo = loadAnimation ("smt_top.png");
  animation = loadAnimation ("de345b9fd9c0d0e6acd16f283d90a9d3.png");
  bg1 = loadAnimation ("image.jpg");
  bg2 = loadAnimation ("13965634137_9a1fe6b8e2_z.jpg");
  bg3 = loadAnimation ("072b68d7fb75fd99dc90eb480f9b477b.jpg");
  go = loadAnimation ("New map.jpg");
}

function setup(){
  createCanvas(400,400);
  map1 = createSprite(2000,200,10,10);
  map1.addAnimation("world", go);
  map1.scale = 0.2;
  seal = createSprite(500,200,2,2);
  seal.addAnimation("sea.png",flow);
  seal.scale = 0;
  japan = createSprite(800,200,2,2);
  japan.addAnimation("jojojo", coolit);
  japan.scale = 0.3;
  ignore1 = createSprite(500,220,2,2);
  ignore1.addAnimation("jojojoo", fofo);
  ignore1.scale = 0.1;
  ship = createSprite(500,200,40,40);
  ship.addAnimation("moving1", moving);
  ship.scale = 0.15;
  firstext = createSprite(800,200,40,40);
  firstext.addAnimation("smt_top.png", logo);
  firstext.scale = 0.75;
  bat1 = createSprite(0,600,10,40);
  bat2 = createSprite(400,600,10,40);
  ball = createSprite(30, 600, 10, 10);
  ball.velocityX = 5;
  japans15 = createSprite(900,70,10,10);
  japans15.addAnimation("imag", bg1);
  japans15.scale = 0.3;
  aquarium = createSprite(2000,270);
  aquarium.addAnimation("hoho", bg2);
  aquarium.scale = 0.535;
  flower = createSprite(2900.6,70);
  flower.addAnimation ("kola", bg3);
  flower.scale = 0.18;
}

function draw() {
  background("black");
  ball.bounceOff(bat1);
  ball.bounceOff(bat2);
  if (coo === "start") {
    fill("blue");
    textSize(40);
    text("HAPPY WORLD!",70,100);
    fill ("red");
    textSize(20);
    text("Press ENTER to Continue", 100, 200);
    if (keyDown("Enter")) {
      coo = "resetb";
    }
  }
  if (coo === "resetr") {
    japans15.x = 2000;
    aquarium.x = 2000;
    flower.x = 2000;
    coo = "resetb";
  }
  if (coo === "resetb") {
    map1.x = 205;
    if (keyDown("1")) {
      coo = "reset"
    }
  }
  if (coo === "reset") {
    seal.scale = 0.25;
    map1.scale = 0;
    ignore1.x = 200;
    ship.x = 100;
    coo = "orange";
  }
  if (coo === "orange") {
    seal.x = seal.x - 2;
    if (seal.x === 0) {
      seal.x = 500;
    }
    if (condition === "cool") {
      japan.x = japan.x - 1;
      ignore1.x = ignore1.x - 1;
    }
      if (ship.isTouching(japan)) {
        condition = "japan";
      }
    if (condition === "japan") {
      japan.x = 1000;
      ship.x = 1000;
      firstext.x = 200;
      if (keyDown ("Enter")) {
        if (ball.bounceOff (bat2) || (bat1)) {
          if (ball.bounceOff (bat1) || (bat2)) {
            firstext.scale = 0;
            seal.scale = 0;
            japans15.x = 90;
            aquarium.x = 200;
            flower.x = 290.6;
            if (keyDown ("a")) {
              japans15.x = 2000;
              aquarium.x = 2000;
              flower.x = 2000;
              coo = "resetb";
            }
          }
        }
      }
    }
  }
  drawSprites();
}