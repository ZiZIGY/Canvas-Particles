import { canvas, mouse, particles } from "./variables.js";

import { Particle } from "./classes/particle.js";
import { animation } from "./functions/animation.js";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

canvas.onmousemove = ({ x, y }) => {
  if (config.particle.spawn.byMouse) {
    mouse.x = x;
    mouse.y = y;
    for (let index = 0; index < config.particle.spawn.count; index++) {
      particles.push(new Particle());
    }
  }
};

animation();
