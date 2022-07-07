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

(function () {
    const analysisSlider = document.querySelector(".analysis__slider");
    if (!analysisSlider) return;

    new Swiper(analysisSlider, {
        simulateTouch: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".analysis .slider-arrows__arrow--next",
            prevEl: ".analysis .slider-arrows__arrow--prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 1,
            },
            728: {
                spaceBetween: 30,
                slidesPerView: 2,
            }
        },
    });
})();

(function () {
    const slider = document.querySelector(".info__slider");
    if (!slider) return;

    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".info .slider-arrows__arrow--next",
            prevEl: ".info .slider-arrows__arrow--prev",
        },
    });
})();

(function () {

    const slidersWrapper = document.querySelectorAll(".news__container");

    if (slidersWrapper.length) {
        slidersWrapper.forEach((el) => {
            let slider = el.querySelector(".news__slider");
            new Swiper(slider, {
                preloadImages: false,
                simulateTouch: false,
                spaceBetween: 30,
                navigation: {
                    nextEl: el.querySelector(".slider-arrows__arrow--next"),
                    prevEl: el.querySelector(".slider-arrows__arrow--prev"),
                },
                pagination: {
                    el: el.querySelector(".swiper-pagination"),
                    type: "bullets",
                },
                breakpoints: {
                    320: {
                        // simulateTouch: true,
                        spaceBetween: 15,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    960: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                },
            });
        });
    }
})();
