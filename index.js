let menuContainer = document.querySelector(".mobile-menu-list");
let menuItem = document.querySelectorAll(".mobile-menu-item");
let hamburger = document.querySelector(".mobile");
let closeIcon = document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menuContainer.classList.contains("showMenu")) {
    menuContainer.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuContainer.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItem.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
