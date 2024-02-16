let monk, eskimo, ninja;

function preload() {
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: { row: 0, col: 1, frames: 8}
  };
  
  monk = createSprite(100, 100, 80, 80);
  monk.spriteSheet = 'assets/monk.png';
  monk.anis.frameDelay = 8;
  monk.addAnis(animations);
  monk.changeAni('stand');

  eskimo = createSprite(100,200,80,80);
  eskimo.spriteSheet = 'assets/eskimo.png';
  eskimo.anis.frameDelay = 8;
  eskimo.addAnis(animations);
  eskimo.changeAni('stand');

  ninja = createSprite(100,300,80,80);
  ninja.spriteSheet = 'assets/ninja.png';
  ninja.anis.frameDelay = 8;
  ninja.addAnis(animations);
  ninja.changeAni('stand');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);

  if(kb.pressing('d'))
    walkRight();
  else if(kb.pressing('a'))
    walkLeft();
  else  
    stopWalk();

  if(monk.x + monk.width/4 > width || monk.x - monk.width/4 < 0 )
  {
    monk.changeAni('stand');
    monk.vel.x = 0;
  }

  if(eskimo.x + eskimo.width/4 > width || eskimo.x - eskimo.width/4 < 0)
  {
    eskimo.changeAni('stand');
    eskimo.vel.x = 0;
  }

  if(ninja.x + ninja.width/4 > width || ninja.x - ninja.width/4 < 0)
  {
    ninja.changeAni('stand');
    ninja.vel.x = 0;
  }
}

function walkRight()
{
  if(monk.x - monk.width/4 < 0)
   monk.x++;
  monk.changeAni('walkRight');
  monk.vel.x = 1;
  monk.scale.x = 1;
  if(eskimo.x - eskimo.width/4 < 0)
    eskimo.x++;
  eskimo.changeAni('walkRight');
  eskimo.vel.x = 1;
  eskimo.scale.x = 1;
  if(ninja.x - ninja.width/4 < 0)
    ninja.x++;
  ninja.changeAni('walkRight');
  ninja.vel.x = 1;
  ninja.scale.x = 1;
}

function walkLeft(){
  if(monk.x + monk.width/4 > width)
    monk.x = monk.x - 1;
  monk.changeAni('walkRight');
  monk.vel.x = -1;
  monk.scale.x = -1;
  if(eskimo.x + eskimo.width/4 > width)
    eskimo.x = eskimo.x -1;
  eskimo.changeAni('walkRight');
  eskimo.vel.x = -1;
  eskimo.scale.x = -1;
  if(ninja.x + ninja.width/4 > width)
    ninja.x = ninja.x - 1;
  ninja.changeAni('walkRight');
  ninja.vel.x = -1;
  ninja.scale.x = -1;
}

function stopWalk() {
  monk.changeAni('stand');
  monk.vel.x = 0;
  eskimo.changeAni('stand');
  eskimo.vel.x = 0;
  ninja.changeAni('stand');
  ninja.vel.x = 0;
}
// function keyTypedOld() {
//   switch(key) {
//     case 'd':
//       walkRight();
//       break;
//     case 'a':
//       if(monk.x + monk.width/4 > width)
//         monk.x = monk.x - 1;
//       monk.vel.x = -1;
//       monk.scale.x = -1;
//       if(eskimo.x + eskimo.width/4 > width)
//         eskimo.x = eskimo.x -1;
//       eskimo.vel.x = -1;
//       eskimo.scale.x = -1;
//       if(ninja.x + ninja.width/4 > width)
//         ninja.x = ninja.x - 1;
//       ninja.vel.x = -1;
//       ninja.scale.x = -1;
//       break;
//   }
// }
