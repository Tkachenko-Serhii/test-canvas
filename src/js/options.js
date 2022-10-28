const canvas = document.getElementById('myCanvas');
const button = document.getElementById('button');

const ctx = canvas.getContext('2d');

canvas.width = 1800;
canvas.height = 800;

const options = {
  isPressed: false,
  down: null,
  current: null,
  up: null,
  setDown: function (e, item) {
    this.isPressed = true;
    this.down = this.getPosition(e, item);
  },
  setUp: function (e, item) {
    this.isPressed = false;
    this.up = this.getPosition(e, item);
  },
  setCurrent: function (e, item) {
    this.current = this.getPosition(e, item);
  },
  getPosition: function (e, item) {
    let position = {
      x: e.clientX - item.offsetLeft,
      y: e.clientY - item.offsetTop,
    };
    return position;
  },
};

export { canvas, button, options, ctx };
