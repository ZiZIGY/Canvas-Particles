import { canvas, context, mouse, particles } from "../variables.js";

import { Particle } from "../classes/particle.js";

export const animation = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  config.hue.value += config.hue.increase;
  if (config.particle.spawn.random) {
    mouse.x = Math.random() * canvas.width;
    mouse.y = Math.random() * canvas.height;
    for (let index = 0; index < config.particle.spawn.count; index++) {
      particles.push(new Particle());
    }
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    for (let j = 0; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;

      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < config.maxDistance) {
        context.beginPath();
        context.strokeStyle = particles[i].color;
        context.lineWidth = config.particle.triangleLineWidth;
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.stroke();
        context.closePath();
      }
    }
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animation);
};
