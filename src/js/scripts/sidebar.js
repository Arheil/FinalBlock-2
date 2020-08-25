import "./modal.js";
import { desktop, sidebarShown, main } from "../index.js";

export const sidebar = document.querySelector('.sidebar');
export const whiteSpace = document.querySelector('.white-space');
const sidebarCloseButton = document.querySelector('.sidebar__close-button');
export const burgerButton = document.querySelectorAll('.burger-button');

export const closeSidebar = function () {
  if (!desktop.matches) {
    event.preventDefault();
    sidebar.style.transform = "translateX(0px)";
    main.style.filter = "opacity(1)";
    let sidebarShown = false;
    whiteSpace.style.display = "none";
    whiteSpace.style.zIndex = "2";
  }
}

burgerButton.forEach(burgerButton => {
  burgerButton.addEventListener('click', function () {
    event.preventDefault();
    if (!sidebarShown) {
      sidebar.style.transform = "translateX(335px)";
      sidebar.style.display = "block";
      let sidebarShown = true;
      main.style.filter = "opacity(0.9)";
      whiteSpace.style.display = "block";
    }
  });
});

sidebarCloseButton.addEventListener('click', function () {
  closeSidebar();
  whiteSpace.style.zIndex = "2";
});

whiteSpace.addEventListener('click', function () {
  closeSidebar();
  whiteSpace.style.zIndex = "2";
});