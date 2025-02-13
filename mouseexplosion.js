document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        createExplosion(event.clientX, event.clientY);
    });

    function createExplosion(x, y) {
        const particles = 20; // Number of particles
        const explosion = document.createElement("div");
        explosion.className = "explosion";
        document.body.appendChild(explosion);

        explosion.style.left = `${x}px`;
        explosion.style.top = `${y}px`;

        for (let i = 0; i < particles; i++) {
            let particle = document.createElement("div");
            particle.className = "particle";
            particle.style.backgroundColor = "rgb(255, 255, 255)"; // White particles

            let angle = Math.random() * Math.PI * 2;
            let speed = Math.random() * 15 + 5; // Speed of movement

            let translateX = Math.cos(angle) * speed;
            let translateY = Math.sin(angle) * speed;

            particle.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
            explosion.appendChild(particle);

            setTimeout(() => {
                particle.style.opacity = "0";
                particle.style.transform = `translate(${translateX * 5}px, ${translateY * 5}px) scale(0)`;
            }, 10);
        }

        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }
});
