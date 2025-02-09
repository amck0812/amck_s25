document.addEventListener("DOMContentLoaded", function () {
    console.log("mousefollower.js is loaded successfully");

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
            z-index: 9999;
        }
    `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", (event) => {
        console.log("Mouse moved:", event.clientX, event.clientY); // Debugging
        follower.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
});
