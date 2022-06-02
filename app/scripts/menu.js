(function () {
    const menu = document.querySelector(".menu");
    if (!menu) return;

    const btnMenu = document.querySelector('.header__btn-menu');

    btnMenu.addEventListener('click', function() {
        btnMenu.classList.toggle('active');
        menu.classList.toggle('active');
    })

})();