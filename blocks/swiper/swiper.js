// import Swiper from "./swiper-bundle.min.js"
import SwiperText from './swiper-bundle.min.js';

export default function decorate(block) {
  // Swiper Wrapper
  const SwiperWrapper = document.createElement('div');
  SwiperWrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    SwiperWrapper.append(row);
  });
  block.append(SwiperWrapper);

  // Swipper Pagination
  const SwiperPagination = document.createElement('div');
  SwiperPagination.classList.add('swiper-pagination');
  block.append(SwiperPagination);

  // Swipper Navigation Prev
  const SwipperNavBtnPrev = document.createElement('div');
  SwipperNavBtnPrev.classList.add('swiper-button-prev');
  block.append(SwipperNavBtnPrev);

  // Swipper Navigation Next
  const SwipperNavBtnNext = document.createElement('div');
  SwipperNavBtnNext.classList.add('swiper-button-next');
  block.append(SwipperNavBtnNext);

  // Swipper ScrollBar
  const SwipperScrollBar = document.createElement('div');
  SwipperScrollBar.classList.add('swiper-scrollbar');
  block.append(SwipperScrollBar);

  SwiperText(block, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: SwiperPagination,
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: SwipperNavBtnNext,
      prevEl: SwipperNavBtnPrev,
    },

    // And if we need scrollbar
    scrollbar: {
      el: SwipperScrollBar,
    },
  });
}
