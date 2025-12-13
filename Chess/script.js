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
});

window.addEventListener("DOMContentLoaded", () => {
    checkOrientation();
});