let ctx
let points = [[7,6],[3,6],[3,-7],[1,-7],[1,6],[-5,6],[-5,1],[-1,1],[-1,-1],[-5,-1],[-5,-5],[-1,-5],[-1,-7],[-7,-7],[-7,8],[7,8]]; //list資料
let w = "淡江大學 教育科技系"

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50

  ctx = canvas.getContext('2d');
	ctx.lineWidth = 5;
	ctx.lineCap = 'round'

  const num = 5
  for (let i = 0; i < num; i++) {
  gradientLine(ctx,random(width), random(height), random(width), random(height), color(random(120), 50, 80), color(random(30, 90), 50, 100), 40)
}



  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}


function draw() {
  let zoom = map(mouseY,0,height,0.5,2);
  scale(zoom)
  background("#b0c4b1");
  textSize(40);
  fill(0, 102, 153);
  text(w, width / 2 + 180, height / 2 + 30);

  translate(width / 2+50, height / 2+50);
  // scale(1, -1);

  
  // push()
  
  // ET(3)
  ET(2)
  ET(1.5)
  ET(1.2)
  ET(1)
  ET(0.5)
  
  
  // pop()



    
  //   for (x = 0; x < width; x = x + rect_width + (mouseX / 105)) {
  //     ratio = map(x, 0, width, 0, 1);
  //     middlecolor = lerpColor(clr1, clr2, ratio);
  //     fill(middlecolor);
  //     rect(x, height / 2 - rect_height / 2, rect_width, rect_height);
  //     points(0, height / 2, 2500 - x, 2500 - x);
  //   }
  // }
}




function gradientLine(ctx, x1, y1, x2, y2, clr1, clr2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, clr1);
  gradient.addColorStop(1, clr2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function ET(r){

  push()
  scale(1, -1);
  clr1 = color("#1e88e5");
  clr2 = color("#ce4257");
  // for (k = 1; k < 5; k = k + 0.7) {
    for (let i = 0; i < points.length - 1; i++) {
      let clr1 = color("#1e88e5");
      let clr2 = color("#ce4257");
      let x1 = points[i][0]*r;
      let y1 = points[i][1]*r;
      let x2 = points[i + 1][0]*r;
      let y2 = points[i + 1][1]*r;
      gradientLine(ctx, x1, y1, x2, y2, clr1, clr2);
    }
    let x1 = points[points.length - 1][0]*r;
    let y1 = points[points.length - 1][1]*r;
    let x2 = points[0][0]*r;
    let y2 = points[0][1]*r;
    gradientLine(ctx, x1, y1, x2, y2, clr1, clr2);
    pop()
}