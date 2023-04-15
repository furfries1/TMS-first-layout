const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30,
    initialSlide: 1,
  });