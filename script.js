"use strict";
let menuActive = document.querySelector(".menu-active");
let headerMenu = document.querySelector(".menu1");

function toggleMenu() {
    menuActive.classList.toggle("hidden");
}

headerMenu.addEventListener("click", toggleMenu);