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
            z-index: 9999;
        }
    `;
    document.head.appendChild(style);

    let followerX = 0;
    let followerY = 0;
    let targetX = 0; 
    let targetY = 0;
    const speed = 5; 

    document.addEventListener("mousemove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
    });

    function moveFollower() {
        let deltaX = targetX - followerX;
        let deltaY = targetY - followerY;
        
        if (Math.abs(deltaX) > speed) {
            followerX += (deltaX > 0) ? speed : -speed;
        } else {
            followerX = targetX;
        }

        if (Math.abs(deltaY) > speed) {
            followerY += (deltaY > 0) ? speed : -speed;
        } else {
            followerY = targetY;
        }

        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

        requestAnimationFrame(moveFollower);
    }

    moveFollower();
});
