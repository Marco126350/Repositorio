var swiper = new Swiper(".mySwiper", {
  slidesPerview: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    991: {
      slidesPerView: 3
    }
  }
})