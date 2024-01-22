document.addEventListener("DOMContentLoaded", function () {
    var scrollTopLink = document.getElementById("scroll-top-link");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopLink.style.display = "block";
        } else {
            scrollTopLink.style.display = "none";
        }
    });

    scrollTopLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
