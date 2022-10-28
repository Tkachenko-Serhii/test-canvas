import { canvas, ctx } from './options';

let lines = [];

function drawLine(ctx, { start, end }) {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
}

function drawAllLines() {
  clearCanvas(ctx);
  lines.map(line => {
    drawLine(ctx, line);
  });
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearAll() {
  lines = [];
  clearCanvas();
}

export { drawAllLines, lines, clearCanvas, clearAll };
