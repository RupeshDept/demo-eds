import Swiper from '../HomePageSwiper/swiper-bundle.min.js';

export default function decorate(block) {
  // Swiper
  const swiper = document.createElement('div');
  swiper.classList.add('swiper');

  // Swipper Wrapper
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  // Row
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });

  swiper.append(swiperWrapper);
  block.append(swiper);

  // Swiper-Pagination
  const SwiperPagination = document.createElement('div');
  SwiperPagination.classList.add('swiper-pagination');
  swiper.append(SwiperPagination);

  // Swiper navigation Prev
  // const SwiperNavBtnPrev = document.createElement('div')
  // SwiperNavBtnPrev.classList.add('swiper-button-prev')
  // swiper.append(SwiperNavBtnPrev)

  // Swiper navigation Next
  // const SwiperNavBtnNext = document.createElement('div')
  // SwiperNavBtnNext.classList.add('swiper-button-next')
  // swiper.append(SwiperNavBtnNext)

  Swiper(swiper, {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1000,
    },

    // Pagination
    pagination: {
      el: SwiperPagination,
      clickable: true,
    },

    // Navigation Arrows
    // navigation: {
    //     nextEl: SwiperNavBtnNext,
    //     prevEl: SwiperNavBtnPrev,
    //     clickable: true,
    // },
  });
}
