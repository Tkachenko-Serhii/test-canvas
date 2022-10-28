import { drawAllLines, lines } from './drawLines';
import { options, canvas } from './options';

function handleMouseDown(e) {
  options.setDown(e, canvas);

  const line = {
    start: options.down,
    end: options.down,
  };

  lines.push(line);
}

function handleMouseUp(e) {
  options.setUp(e, canvas);
}

function handleMouseMove(e) {
  if (options.isPressed) {
    options.setCurrent(e, canvas);

    let line = {
      start: options.down,
      end: options.current,
    };
    lines.pop();
    lines.push(line);
  }
}

window.requestAnimationFrame(function loop() {
  drawAllLines();
  window.requestAnimationFrame(loop);
});

export { handleMouseDown, handleMouseUp, handleMouseMove };
