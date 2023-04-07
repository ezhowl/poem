let poem = "yeah. uh huh. school’s \n been good. uh huh. i’m learning \n stuff. yeah. what? uh, just, \n school stuff, you know. not \n much. what do you mean i sound down, \n i’ve always sounded like this. like i’ve climbed to the top \n of a mountain to find \n that i kind of liked it back down \n there more actually with the drunken yogurt bottles and dog fur \n and laughter where she likes him but he likes her \n but she’s only into super hot anime guys or some \n stupid shit like that. \n in the prison with no freedom \n except the freedom to walk roads \n with no guns and no crumbs and no sums \n to figure out—sums i’ll never figure out— \n the humming that slumps over and mumbles \n in reruns that i’ve failed the mountain, climbed \n the wrong mountain, failed to climb—the conditions for love— \n conditioned \n to love the things i’ll never \n have—but yeah. i’m good. mid-terms \n are coming soon but nothing much. i think \n i just need some more coffee to make \n monday go away. miss you \n too. bye."

var font;
    
function preload() {
  font = loadFont('PlayfairDisplay-VariableFont_wght.ttf');
}

function setup(){
  createCanvas(800, 800);
  rectMode(CENTER);
  strokeWeight(0.5);
  noFill();



}

function draw() {
  background('#f3f5f1');
  randomSeed(mouseX);
  
  
  for (let i = 20; i < 700; i += 120){
    for (let j = 20; j < 700; j += 120){
      if (j<400){
        for (let l = 0; l < 9; l += 1){
          if (l < 3){
            k = 70;
            strokeWeight(0.6);
            stroke('#0047ab'); //blue
            noFill();
            quad(i+random(k),j+random(k),
              i+70+random(k),j+random(k),i+70+random(k),
              j+90+random(k),i+random(k),j+90+random(k));
          }else if(l < 5 && l > 3){
            k = 80;
            //strokeWeight(0.8);
            stroke('#383b3e'); //blue
            quad(i+random(k),j+random(k),
              i+70+random(k),j+70+random(k),i+random(k),
              j+70+random(k),i+70+random(k),j+random(k)); //changed shape
          }else{
            k = 50;
            strokeWeight(0.5);
            stroke('#383b3e'); //black
            quad(i+random(k),j+random(k),
              i+90+random(k),j+random(k),i+90+random(k),
              j+90+random(k),i+random(k),j+90+random(k));
          }
        }
      }else{
        for (let l = 0; l < 30; l +=1){
          if (l < 3){
            k = 40;
            stroke('#0047ab');
            quad(i+random(k),j+random(k),i+90+random(k),j+random(k),
            i+90+random(k),j+90+random(k),i+random(k),
            j+90+random(k));
          }else if (l > 3 && l < 10){
            k = 55;
            stroke('#0047ab');
            quad(i+random(k),j+random(k),i+90+random(k),j+random(k),
            i+90+random(k),j+90+random(k),i+random(k),
            j+90+random(k));
          }else{
            k = 35;
            stroke('#383b3e');
            // quad(i+random(k),j+random(k),i+90+random(k),j+random(k),
            //   i+90+random(k),j+90+random(k),i+random(k),
            //   j+90+random(k));
          }
        }
      }
    }
  }

  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  textFont(font);
  text(poem, width/2, height/2)
  // let bbox = font.textBounds(poem, width/2, height/2,12);
  // fill(0);
  // stroke(0);
  // rect(bbox.x + 200, bbox.y, bbox.w, bbox.h);
  // fill(0);
  // noStroke();
  
  for (i = 0; i < poem.length; i++){
    text(poem[i],200,i*12,200,300)
  }
  
  translate(mouseX - width/2, mouseY - height/2);
}


