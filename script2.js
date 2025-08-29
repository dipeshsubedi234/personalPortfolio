document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector("#scroll-Top .return-to-top");

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };

    scrollButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
