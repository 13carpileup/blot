const vanishing = [100, 125];
console.log("HELLO");
function line(xStart, yStart, offset) {
  const m = (yStart - vanishing[1]) / (xStart - vanishing[0]);
  const c = yStart - m * xStart;

  let y = vanishing[1] - offset;
  let x = (y - c) / m;

  console.log(m);
  console.log(c);
  drawLines([[[xStart,yStart],[x,y]]]);

  return [x, y];
}

function gLine(x1, y1, x2, y2) {
  drawLines([[[x1, y1], [x2, y2]]]);
}

const width = 200;
const height = 200;

setDocDimensions(width, height);

//road
const distanceFromSide = 40;
line(distanceFromSide,0, 0)
line(width - distanceFromSide,0, 0)

//road lines
const roadWidth = 10;
const roadHeight = 8;

for (var i = 20; i < vanishing[1] - 30; i += 20) {
  let original1 = [vanishing[0] - roadWidth / 2 * vanishing[1] / i, i]
  let original2 = [vanishing[0] + roadWidth / 2 * vanishing[1] / i, i]
  
  let final1 = line(original1[0], original1[1], 100 - i);
  let final2 = line(original2[0], original2[1], 100 - i);
  
  gLine(original1[0], original1[1], original2[0], original2[1]);
  gLine(final1[0], final1[1], final2[0], final2[1]);
}



















