export default function sliderImagenes(myswiper,buttonPrev,buttonNext){
var swiper = new Swiper(myswiper, {
  slidesPerview: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    prevEl: buttonPrev,
    nextEl: buttonNext
  },
  breakpoints: {
    991: {
      slidesPerView: 1
    }
  }
})

}