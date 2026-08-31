const possibilit = new Swiper(".possibilit-slider", {
  spaceBetween: 20,
  slidesPerView:4,
  pagination: {
    el: ".possibilit-pagination",
    clickable: true,
  },
  breakpoints: {
    1020: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      loop: true,
    },
    575: {
      slidesPerView: 2,
      loop: true,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,

    },
  },

});




const gallerySwiper = new Swiper('.gallerySlider', {
  spaceBetween: 12,

  grid: {
    rows: 2,
    fill: 'row',
  },

  slidesPerView: 3,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },

  breakpoints: {

    1020: {
      slidesPerView: 3,

      grid: {
        rows: 2,
      },
    },
    767: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
    0: {
      slidesPerView: 1,

      grid: {
        rows: 1,
      },
    },
  },
});


const casesSwiper = new Swiper(".cases-new-slider", {
  spaceBetween: 10,
  slidesPerView:4,
  autoHeight: true,
  pagination: {
    el: ".cases-pagination",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      loop: true,
    },
    575: {
      slidesPerView: 2,
      loop: true,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,

    },
  },
});



const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
  autoHeight: true,
  loop:true,
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1020: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      loop: true,
    },
    700: {
      slidesPerView: 2,
      loop: true,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,

    },
  },
});













let sampleSmSwiper = new Swiper(".sample-sm-slid", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".sample-pagination",
    type: 'fraction',
  },
  navigation: {
    nextEl: '.sample-button-next',
    prevEl: '.sample-button-prev',
  },
  breakpoints: {
    '767': {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    '570': {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true
    },
    '320': {
      slidesPerView: 2.8,
      spaceBetween: 10,
      loop: true
    },
  },
});
let sampleBigSwiper = new Swiper(".sample-big-slid", {
  spaceBetween: 10,
  pagination: {
    el: ".sample-pagination",
    type: 'fraction',
  },
  effect: "fade",

  thumbs: {
    swiper: sampleSmSwiper,
  },
});










const tempSwiper = new Swiper(".temp-come-slide", {
  spaceBetween: 10,
  slidesPerView:4,
  autoHeight: true,
  pagination: {
    el: ".temp-pagination",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      loop: true,
    },
    590: {
      slidesPerView: 2,
      loop: true,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,

    },
  },
});











const moreSwiper = new Swiper('.more-market-slide', {
  spaceBetween: 12,
  slidesPerView: 3,
  loop: true,
  pagination: {
    el: ".more-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.more-button-next',
    prevEl: '.more-button-prev',
  },
  breakpoints: {

    1020: {
      slidesPerView: 3,

    },
    767: {
      slidesPerView: 2,

    },
    0: {
      slidesPerView: 1,

    },
  },
});
