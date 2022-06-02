(function () {
    const header = document.querySelector(".header");
    if (!header) return;

    const headerWrapper = header.querySelector(".header__wrapper");
    const headerFake = header.querySelector(".header__height");

    const heightHeader = heightElem(headerWrapper);

    addClassForHeaderScroll();

    heightForHeaderFake();

    window.addEventListener("scroll", function () {
        addClassForHeaderScroll();
    });
    
    function heightForHeaderFake() {
        headerFake.style.height = heightHeader + 'px';
    }

    function addClassForHeaderScroll() {
        if (getBodyScrollTop() > heightHeader) {
            headerWrapper.classList.add("scroll");
        } else {
            headerWrapper.classList.remove("scroll");
        }
    }

    function heightElem(el) {
        return Math.max.apply(null, [el.clientHeight, el.offsetHeight, el.scrollHeight]);
    }

    function getBodyScrollTop() {
        return (
            self.pageYOffset ||
            (document.documentElement && document.documentElement.scrollTop) ||
            (document.body && document.body.scrollTop)
        );
    }
})();
