import { useEffect } from "react";

const Background = () => {
  useEffect(() => {
    function renderCanvas() {
      const canvas = document.getElementById("canvas1");
      const ctx = canvas.getContext("2d");
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;

      let paritcleArray;

      function Particle(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };
      Particle.prototype.update = function () {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      };

      function init() {
        paritcleArray = [];
        for (let i = 0; i < 200; i++) {
          let size = 1;
          let x = Math.random() * (window.innerWidth - size * 2);
          let y = Math.random() * (window.innerHeight - size * 2);
          let directionX = Math.random() * 0.4 - 0.2;
          let directionY = Math.random() * 0.4 - 0.2;
          let color = "#FFF";

          paritcleArray.push(new Particle(x, y, directionX, directionY, 1, color));
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < paritcleArray.length; i++) {
          paritcleArray[i].update();
        }
      }

      init();
      animate();
    }
    renderCanvas();

    window.onresize = () => {
      renderCanvas();
    };
  }, []);

  return <canvas id="canvas1"></canvas>;
};

export default Background;
