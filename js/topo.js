const topo = {};

function initializeScrollTopLink() {
    topo.scrollTopLink = document.getElementById("scroll-top-link");

    if (topo.scrollTopLink) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                topo.scrollTopLink.style.display = "block";
            } else {
                topo.scrollTopLink.style.display = "none";
            }
        });

        topo.scrollTopLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", initializeScrollTopLink);

module.exports = topo;
module.exports.initializeScrollTopLink = initializeScrollTopLink;
