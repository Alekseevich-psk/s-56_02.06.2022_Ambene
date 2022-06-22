(function() {

    const parent = document.querySelector('.popup');
    if ( !parent ) return;

    const body = document.querySelector('body');

    const btnShowPopup = parent.querySelector('.popup__btn-approval--yes');
    const btnClosePopup = parent.querySelector('.popup__btn-approval--no');

    if(!localStorage.show == 1) {
        startPopup(parent);
    }

    if(btnShowPopup) {
        btnShowPopup.addEventListener('click', () => {
            startPopup(parent);
            localStorage.setItem('show', 1);
        })
    }

    if(btnClosePopup) {
        btnClosePopup.addEventListener('click', () => {
            body.classList.add('hide');
        })
    }

    function startPopup(el) {
        el.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }

}());