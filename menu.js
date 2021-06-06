const hamburgerBtn = document.getElementById("hamburger-menu");
const sideBar = document.getElementById("side-bar");
const closeBtn = document.getElementById("close-btn");
const mainContent = document.getElementById("wrapper");
const navBar = document.getElementById("navbar");

hamburgerBtn.addEventListener("click", () => {
    sideBar.style.width = "250px";
    mainContent.style.marginRight = "250px";
    navBar.style.marginRight = "250px";
})

closeBtn.addEventListener("click", () => {
    sideBar.style.width = "0px";
    mainContent.style.marginRight = "0px";
    navBar.style.marginRight = "0px";
})