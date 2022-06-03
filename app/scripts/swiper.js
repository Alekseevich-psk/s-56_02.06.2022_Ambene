(function () {
    const buySlider = document.querySelector(".buy__slider");
    if (!buySlider) return;

    new Swiper(buySlider, {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".slider-arrows__arrow--next",
            prevEl: ".slider-arrows__arrow--prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
            728: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            960: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
        },
    });
})();
