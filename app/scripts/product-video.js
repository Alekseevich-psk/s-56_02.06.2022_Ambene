(function () {
    const parent = document.querySelector(".product");
    if (!parent) return;

    const videoBG = parent.querySelector(".product__video-bg");
    const videoWrap = parent.querySelector(".product__video-wrap");
    const videoPlayer = parent.querySelector("#product-video");

    if (videoBG && videoWrap && videoPlayer) {
        parent.addEventListener("click", function (e) {
            let target = e.target;

            if (target.classList.contains("product__video-bg")) {
                videoBG.classList.add("hide");
                videoWrap.classList.remove("hide");
                videoPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
        });
    }
})();
