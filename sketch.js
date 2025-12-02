let gif;
let frameSlider;
let sound; // サウンドオブジェクトを格納する変数
let sound2;
let sound3;
let index = 0;
let index_old;
let maxFrame;
  let uX, uY;

// Load the image.
function preload() {
  gif = loadImage("halloweenAnim.GIF");
  sound = loadSound('flipbook01_short.wav');
  sound2 = loadSound('GlassBells01.mp3');
  sound3 = loadSound('GlassBells02.mp3');
}

function setup() {
    createCanvas(windowWidth, windowWidth*1.2);
  ww = windowWidth;
  wh = windowHeight;

  // Get the index of the last frame.
  maxFrame = gif.numFrames() - 1;
/*  
  // Create a slider to control which frame is drawn.
  frameSlider = createSlider(0, maxFrame);
  frameSlider.position(ww*0.1, ww*1.1);
  frameSlider.size(ww*0.8);
*/
}

function draw() 
{
  background(255);

  // さわるバーを描く
  fill(255,200,200);
  noStroke();
  rect(ww*0.1, ww*1.05, ww*0.8, 40);
  ellipse(ww*0.1, ww*1.05+20, 40, 40);
  ellipse(ww*0.9, ww*1.05+20, 40, 40);

  // タッチがある場合はタッチ座標を使用し、ない場合はマウス座標を使用

     if (touches.length > 0) {
        uX = touches[0].x;
        uY = touches[0].y;
      } else {
        uX = mouseX;
        uY = mouseY;
      }

  if(uX>=ww*0.1 && uX<=ww*0.9)
  {
    index = (int)(map(uX, ww*0.1, ww*0.9, 0, maxFrame));
  }

  if(uX<ww*0.1)
  {
    index = 0;
  }
  if(uX>ww*0.9)
  {
    index = maxFrame;
  }
  
  if(index != index_old)
  {
    sound.stop();
    sound.play();
  }
  if(index==56 && index_old < 56)
  {
    sound2.stop();
    sound2.play();
  }
  
  if(index==56 && index_old > 56)
  {
    sound3.stop();
    sound3.play();
  }
     
  // Set the GIF's frame.
  gif.setFrame(index);
  
  // Display the image.
  image(gif, 0, 0, ww,ww-30);
  
  fill(0);
  //文字の設定
  textAlign(CENTER);
  textSize(30);

  //カウント表示
  text(index, ww/2, ww);

  index_old = index;
}

// On mouse click
function mousePressed() 
{
    sound.play();
          uX = mouseX;
        uY = mouseY;

}

function touchMoved() 
{
  uX = touches[0].x;
  uY = touches[0].y;
}
