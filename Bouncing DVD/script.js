const app = document.getElementById("app");

const slowBtn = document.getElementById("slow");
slowBtn.addEventListener("click", () => {
    speed -= 0.25;
})

const fastBtn = document.getElementById("fast");
fastBtn.addEventListener("click", () => {
    speed += 0.5;
})

const playBtn = document.getElementById("start");
playBtn.addEventListener("click", start);
const playIcon = document.getElementById("playIcon");

function start() {
    playBtn.removeEventListener("click", start);
    moveAllowed = true;
    playIcon.classList.remove("ph-play");
    playIcon.classList.add("ph-pause");
    playBtn.addEventListener("click", stop);
}
function stop() {
    playBtn.removeEventListener("click", stop);
    moveAllowed = false;
    playIcon.classList.remove("ph-pause");
    playIcon.classList.add("ph-play");
    playBtn.addEventListener("click", start);
}

window.addEventListener("DOMContentLoaded", () => {
    checkOrientation();
    claculateBoundary();
    setInterval(move, 15);
})


// #region DVD movement
let btn = document.getElementById("dvd");
btn.appendChild(createDvdLogoSvg());
let moveAllowed = false;
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;
let speed = 2;
let btnWidth = btn.offsetWidth;
let btnHeight = btn.offsetHeight;

let maxX, maxY;
function claculateBoundary() {
    btnWidth = btn.offsetWidth;
    btnHeight = btn.offsetHeight;
    maxX = document.getElementById("dvd-area").offsetWidth - btnWidth;
    maxY = document.getElementById("dvd-area").offsetHeight - btnHeight;
}

function move() {
    if (!moveAllowed) {
        return;
    }
    x += dx * speed;
    y += dy * speed;

    if (x >= maxX) {
        dx = -1;
        changeColor();
    } else if (x <= 0) {
        dx = 1;
        changeColor();
    }

    if (y >= maxY) {
        dy = -1;
        changeColor();
    } else if (y <= 0) {
        dy = 1;
        changeColor();
    }

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

const colors = ["green", "yellow", "red", "blue", "magenta", "skyblue", "pink", "white"]
let n = 0;

function changeColor() {
    if (n == 7) {
        n = 0;
    }
    n++;
    document.querySelectorAll(".dvd-logo-svg").forEach((pic) => {
        pic.style.fill = colors[n];
    });
}

// #endreion


function createDvd() {
    let div = document.createElement("div");
    div.className = "dvd";
    div.appendChild(createDvdLogoSvg());
    return div;
}

function checkOrientation() {
    if (document.body.offsetHeight > document.body.offsetWidth) {
        app.classList.remove("horizontal");
        app.classList.add("vertical");
    } else {
        app.classList.remove("vertical");
        app.classList.add("horizontal");
    }
}

window.addEventListener("resize", () => {
    checkOrientation();
    claculateBoundary();
});

function createDvdLogoSvg() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 187.09 82.68');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '187.09');
    svg.setAttribute('height', '82.68');

    svg.setAttribute('class', 'dvd-logo-svg');

    const pathsData = [
        "M128.81,10.16H147S169,9,168.45,20.32c-.87,17.47-27.65,16.22-27.65,16.22L146,13.83h-18.2L120.2,46.7h18.06s18,.8,32.88-6.35c15.8-7.62,15.94-21,15.94-21a15.3,15.3,0,0,0-7.76-13.4C170,.42,157.87,0,157.87,0H118.09L94.53,30.62,84.65,0H16.08L13.54,10.16h18.2S53.75,9,53.19,20.32c-.87,17.47-27.65,16.22-27.65,16.22l5.22-22.71H12.56L4.94,46.7H23s18,.8,32.87-6.35c15.8-7.62,15.94-21,15.94-21a35,35,0,0,0-.7-5.5c-.43-1.41-1-3.67-1-3.67H71L87.76,57.28l41.05-47.12Z",
        "M88.32,57.28C39.54,57.28,0,63,0,70s39.54,12.7,88.32,12.7S176.64,77,176.64,70,137.1,57.28,88.32,57.28ZM45.54,76.92H41.82L34.06,63.73h5.21l4.46,8,4.48-8h5.22Zm20.93,0h-4.8V63.73h4.8Zm17,0h-6.8V63.73h6.8c5.15,0,9.38,2.89,9.38,6.59S88.58,76.92,83.46,76.92Zm29.16-10.28h-5.7v2.2h5.41v2.9h-5.41V74h5.7v2.9h-10.5V63.73h10.5Zm19.29,10.72c-5.93,0-10.21-3-10.21-7.28,0-4,4.89-6.78,10.21-6.78s10.21,2.79,10.21,6.78C142.12,74.35,137.83,77.36,131.91,77.36Z",
        "M131.91,66.62c2.86,0,5.21,1.66,5.21,3.48,0,2.27-2.35,3.93-5.21,3.93s-5.22-1.66-5.22-3.93c0-1.82,2.35-3.48,5.22-3.48Z",
        "M82.58,66.64H81.45V74h1.08c2.87,0,5.32-1.12,5.32-3.69C87.85,68,85.67,66.64,82.58,66.64Z"
    ];

    const gContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gContainer.setAttribute('id', 'DVD-Paths');

    pathsData.forEach(d_value => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d_value);
        gContainer.appendChild(path);
    });

    svg.appendChild(gContainer);

    return svg;
}