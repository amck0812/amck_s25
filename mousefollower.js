document.addEventListener("DOMContentLoaded", function () {
    const follower = document.createElement("img");
    follower.id = "follower";
    follower.src = "butterflysmall.gif"; 
    document.body.appendChild(follower);

    const style = document.createElement("style");
    style.innerHTML = `
        #follower {
            position: absolute;
            width: 50px; 
            height: auto;
            pointer-events: none; 
            transition: transform 0.1s ease-out;
            z-index: 1000; 
        }
    `;
    document.head.appendChild(style);

    // Mouse movement event
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // Move the image smoothly to the cursor position
        follower.style.transform = `translate(${x}px, ${y}px)`;
    });
});
