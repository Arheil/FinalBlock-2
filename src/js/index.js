import "../scss/style.scss";
/* import {closeSidebar, sidebar, whiteSpace, burgerButton} from './scripts/sidebar.js'; */
/* import {openModal, closeModal, callButton, callModal, callCloseButton, feedbackButton, feedbackModal, feedbackCloseButton} from './scripts/modal.js'; */
import {/* showTechButtonOn, showTechButtonOff, showBrandsButtonOn, showBrandsButtonOff, brandsShowAll, techShowAll, techWrapper, brandsWrapper, techShowAllImg, techShowAllText, brandsShowAllImg, brandsShowAllText, activeClasses, */ show} from './scripts/sliders.js'

const tablet = window.matchMedia("(min-width: 768px)");
export const desktop = window.matchMedia("(min-width: 1120px)");
export let sidebarShown = false;
export const main = document.querySelector('.main');
const activeClasses = document.querySelectorAll(".slide");
const descShowAll = document.querySelector('.description__link');
const descTabletText = document.querySelector('.description__text--tabletplus');
const descTabletFullText = document.querySelector('.description__text--full');
const descFullText = document.querySelector('.description__text--all');
let descShown = false;

const brandsShowAll = document.querySelector('.brands__show-all');
const techShowAll = document.querySelector('.tech__show-all');
const techWrapper = document.querySelector(".tech__wrapper");
const brandsWrapper = document.querySelector(".brands__wrapper");
const techShowAllImg = document.querySelector(".tech__show-all > .show-all__img");
const techShowAllText = document.querySelector(".tech__show-all > .show-all__text");
const brandsShowAllImg = document.querySelector(".brands__show-all > .show-all__img");
const brandsShowAllText = document.querySelector(".brands__show-all > .show-all__text")
/* const show = document.querySelectorAll('.show-all'); */
let brandsListShown = false;
let techListShown = false;


const showDescButtonOn = function () {
  descShown = true;
  /* descTabletText.style.display = "inline"; */
  descFullText.style.display = "inline";
  descTabletFullText.style.display = "inline";
  document.querySelector(".description__link > .show-all__text").textContent = "Скрыть";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(180deg)";
}

const showDescButtonOff = function () {
  descShown = false;
  if (!tablet.matches) {
    descFullText.style.display = "none";
  }
  if (!desktop.matches) {
    descTabletFullText.style.display = "none";
  }
  descFullText.style.display = "none";
  document.querySelector(".description__link > .show-all__text").textContent = "Читать далее";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(0deg)";
}

descShowAll.addEventListener('click', function () {
  if (!descShown) {
    showDescButtonOn();
  } else {
    showDescButtonOff();
  }
  descShowAll.classList.toggle('show-all');
});

const showTechButtonOn = function () {
  techListShown = true;
  techShowAllImg.style.transform = "rotate(180deg)";
  techShowAllText.textContent = "Скрыть";
  techWrapper.style.height = "100%";
}

const showTechButtonOff = function () {
  techListShown = false;
  techShowAllImg.style.transform = "rotate(0deg)";
  techShowAllText.textContent = "Показать все";
  techWrapper.style.height = "160px";
}

const showBrandsButtonOn = function () {
  brandsListShown = true;
  brandsShowAllImg.style.transform = "rotate(180deg)";
  brandsShowAllText.textContent = "Скрыть";
  brandsWrapper.style.height = "100%";
}

const showBrandsButtonOff = function () {
  brandsListShown = false;
  brandsShowAllImg.style.transform = "rotate(0deg)";
  brandsShowAllText.textContent = "Показать все";
  brandsWrapper.style.height = "160px";
}

techShowAll.addEventListener('click', function () {
  if (!techListShown) {
    showTechButtonOn();
  } else {
    showTechButtonOff();
  }
});

brandsShowAll.addEventListener('click', function () {
  if (!brandsListShown) {
    showBrandsButtonOn();
  } else {
    showBrandsButtonOff();
  }
});

for (let i = 0; i < activeClasses.length; i++) {
  if (!tablet.matches) {
    brandSwiper.init();
    techSwiper.init();
    pricesSwiper.init();
  }
}

tablet.addListener(e => {
  for (let i = 0; i < activeClasses.length; i++) {
    if (e.matches) {
      activeClasses[i].classList.remove('swiper-slide');
      closeSidebar();
      brandSwiper.destroy();
      techSwiper.destroy();
      pricesSwiper.destroy();
    } else {
      activeClasses[i].classList.add('swiper-slide');
      brandSwiper.init();
      techSwiper.init();
      pricesSwiper.init();
    }
  }
});