const hamburger = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("side-bar");
const close = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
    sidebar.classList.remove("hide");
})

close.addEventListener("click", () => {
    sidebar.classList.add("hide");
})