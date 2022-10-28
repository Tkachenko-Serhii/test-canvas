import { handleMouseDown, handleMouseUp, handleMouseMove } from './js/mouseFunc';
import { clearAll } from './js/drawLines';
import { button } from './js/options';

document.addEventListener('mousedown', handleMouseDown);

document.addEventListener('mouseup', handleMouseUp);

document.addEventListener('mousemove', handleMouseMove);

button.addEventListener('click', clearAll);
