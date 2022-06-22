(function () {

    const parent = document.querySelectorAll(".problems__inner");
    if (!parent.length) return;

    const popup = document.querySelector('.popup');
    const popupBodyEnter = document.querySelector('.popup__body--enter');
    const popupBodyAboutProduct = document.querySelector('.popup__body--about-product');
    const body = document.querySelector('body');

    parent.forEach(element => {
        element.addEventListener('click', function(event) {
            let target = event.target;

            const aboutProduct = element.querySelector('.about-product')

            if(target.classList.contains('problems__btn--insturction') && aboutProduct) {
                startPopup(popup);
                popupBodyEnter.classList.add('hide');
                popupBodyAboutProduct.classList.remove('hide');
                popupBodyAboutProduct.appendChild(aboutProduct.cloneNode(true));
            }
        })
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup__overlay') 
        && !popupBodyAboutProduct.classList.contains('hide') ) {
            startPopup(popup);
            popupBodyEnter.classList.remove('hide');
            popupBodyAboutProduct.classList.add('hide');
            popupBodyAboutProduct.innerHTML = '';
        }
    })

    function startPopup(el) {
        el.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

})();
