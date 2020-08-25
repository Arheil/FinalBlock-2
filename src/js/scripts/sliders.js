import { closeSidebar } from "./sidebar.js";
import {Swiper} from "swiper";

const slider = document.querySelector('.prices__container');
const slider1 = document.querySelector('.brands__container');
const slider2 = document.querySelector('.tech__container');

  let mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 30, 
    
    // If we need pagination
    pagination: {
    el: '.pag-1',
    type: 'bullets'
    },	  
  })

  let mySwiper1 = new Swiper(slider1, {
      slidesPerView: 1,
      spaceBetween: 30, 
    
    // If we need pagination
    pagination: {
    el: '.pag-2',
    type: 'bullets'
    },	  
  })

  let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    spaceBetween: 30, 
  
  // If we need pagination
  pagination: {
  el: '.pag-3',
  type: 'bullets'
  },	  
})



/* const tablet = window.matchMedia("(min-width: 768px)");
const activeClasses = document.querySelectorAll(".slide");

const slider = document.querySelector('.prices__container');
const slider1 = document.querySelector('.brands__container');

let pricesSwiper = new Swiper ('slider', {
  pagination: {
    el: '.prices__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  loop: true,
  init: false
})

let brandSwiper = new Swiper ('slider1', {
  pagination: {
    el: '.brands__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  init: false
})

let techSwiper = new Swiper('.tech__container', {
  pagination: {
    el: '.tech__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 240,
  loop: true,
  init: false
}) */

/* export {showTechButtonOn, showTechButtonOff, showBrandsButtonOn, showBrandsButtonOff, brandsShowAll, techShowAll, techWrapper, brandsWrapper, techShowAllImg, techShowAllText, brandsShowAllImg, brandsShowAllText, tablet, activeClasses, show}; */