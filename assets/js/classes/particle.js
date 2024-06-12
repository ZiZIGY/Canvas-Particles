import { canvas, context, mouse } from "../variables.js";

export class Particle {
  constructor() {
    this.color = `hsl(${config.hue.value}, 100%, 50%)`;
    this.y = Math.random() * canvas.height;
    this.x = Math.random() * canvas.width;
    this.x = mouse.x;
    this.y = mouse.y;
    this.baseSize = config.particle.baseSize;
    this.minSize = config.particle.minSize;
    this.reduceSize = config.particle.reduceSize;
    this.size = Math.random() * this.baseSize;
    this.speedX =
      Math.random() * config.particle.speedX - config.particle.speedX / 2;
    this.speedY =
      Math.random() * config.particle.speedY - config.particle.speedY / 2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size -= this.size > this.minSize && this.reduceSize;
  }
  draw() {
    context.beginPath();

    context.strokeStyle = context.fillStyle = this.color;
    context.lineWidth = config.particle.lineWidth;
    config.particle.square
      ? context.rect(
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size,
          this.size
        )
      : context.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    config.particle.fill ? context.fill() : context.stroke();
    context.closePath();
  }
}
