(function () {
    const parent = document.querySelector(".product");
    if (!parent) return;

    const videoBG = parent.querySelector(".product__video-bg");
    const videoWrap = parent.querySelector(".product__video-wrap");
    const videoPlayer = parent.querySelector(".product__video-wrap video");

    let flagPlay = true;

    parent.addEventListener("click", function (e) {
        let target = e.target;

        if (target.classList.contains("product__video-bg")) {
            videoBG.classList.add("hide");
            videoWrap.classList.remove("hide");
            videoPlayer.play();
        }
    });

    videoWrap.addEventListener("click", () => {
        if (flagPlay) {
            videoPlayer.pause();
            flagPlay = false;
            console.log(flagPlay);
        } else {
            videoPlayer.play();
            flagPlay = true;
            console.log(flagPlay);
        }
    });
})();
