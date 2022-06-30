(function () {
    const parent = document.querySelector(".patients");
    if (!parent) return;

    const newsSections = document.querySelectorAll(".news__container");
    if (!newsSections.length) return;

    parent.addEventListener("click", function (e) {
        let target = e.target;

        if (target.classList.contains("gl-button__btn--osteochondrosis")) {
            if (!newsSections[1].classList.contains("hide")) {
                newsSections[1].classList.add("hide");
            }

            if (newsSections[0].classList.contains("hide")) {
                newsSections[0].classList.remove("hide");
            }
        }

        if (target.classList.contains("gl-button__btn--osteoarthritis")) {
            if (!newsSections[0].classList.contains("hide")) {
                newsSections[0].classList.add("hide");
            }

            if (newsSections[1].classList.contains("hide")) {
                newsSections[1].classList.remove("hide");
            }
        }
    });
})();
