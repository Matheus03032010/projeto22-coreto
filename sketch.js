/**
 * PROJETO DO ARQUERO
 * Aluno: Matheus Lisboa
 * Data: 31/03/2022
 */


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage,playerimage, playerArcherimage;

function preload() {
  // criação das imagens
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
  playerArcherimage.angleMode = 90;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options={
    isStatic: true

  };
  
  // cria os objetos para tela
  playerBase= Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);

  player=Bodies.rectangle(250,playerBase.position.y -160,50,180,options);
  
  World.add(world,player);

  playerArcher=Bodies.rectangle(250,playerBase.position.y -160,50,180,options);
  World.add(world,playerArcher);
}

  //exibir a imagem da base do jogador usando a função image()
function draw(){
  background(backgroundImg);

  // apresenta o jogador e sua base
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,50,180);
   
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);//
  text("ARQUEIRO ÉPICO", width / 2, 100);
 
  // rotaciona a imagem em -90 graus
  rotate(-90 ,[]);

  //foi alterada a posição da imagem para encaixar no braço do boneco
  image(playerArcherimage,playerArcher.position.x-540,playerArcher.position.y+90 ,100,100);
 // Engine.update(engine);
   
 