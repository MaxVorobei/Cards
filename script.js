'use strict'

function slidesPlugin() {
   const slides = document.querySelectorAll('.slide');

   const slideNumber = Math.floor(Math.random() * slides.length);

   slides[slideNumber].classList.add('active');

   for (const slide of slides) {
      slide.addEventListener('click', () => {
         clearActiveClasses();

         slide.classList.add('active')
      })
   }

   function clearActiveClasses() {
      slides.forEach((slide) => {
         slide.classList.remove('active')
      })
   }
}

slidesPlugin();