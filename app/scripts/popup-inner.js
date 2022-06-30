(function () {
    const parent = document.querySelector(".popup");
    if (!parent) return;

    const popupBodyEnter = document.querySelector('.popup__body--enter');
    const popupBodyInner = document.querySelector('.popup__body--inner');

    const btnsOpen = document.querySelectorAll(".open__popup");
    const body = document.querySelector("body");

    if(btnsOpen.length) {
        btnsOpen.forEach((el) => {
            if (el) {
                el.addEventListener("click", () => {
    
                    let elemForInnerPopup = document.getElementById(el.getAttribute('data-popup-id'));

                    if(elemForInnerPopup) {
                        startPopup(parent);
                        popupBodyEnter.classList.add('hide');
                        popupBodyInner.classList.remove('hide');
                        popupBodyInner.appendChild(elemForInnerPopup.cloneNode(true));
                    } else {
                        console.error("Елемент не найден! Проверьте data-popup-id елемента");
                    }
                    
                });
            }
        });
    }


    parent.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup__overlay') 
        && !popupBodyInner.classList.contains('hide') ) {
            startPopup(parent);
            popupBodyEnter.classList.remove('hide');
            popupBodyInner.classList.add('hide');
            popupBodyInner.innerHTML = '';
        }
    })

    function startPopup(el) {
        el.classList.toggle("active");
        body.classList.toggle("no-scroll");
    }

})();
