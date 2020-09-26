var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev"
  },
  effect: "fade",
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev"
  }
});

ymaps.ready(init);
var myMap,
  myPlacemark;
function init() {
   myMap = new ymaps.Map("map", {
     center: [7.838190710155044, 98.29882109172051],
    zoom: 16
  });

  myPlacemark = new ymaps.Placemark([7.838190710155044, 98.29882109172051], {
    hintContent: 'Phuket',
    balloonContent: 'Hilton Hotel'
  });

  myMap.geoObjects
    .add(myPlacemark);
}


