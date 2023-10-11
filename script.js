

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container")
const hScroll = document.querySelector(".horizontal-scroll")
const btnScrollLeft = document.querySelector("#btn-scroll-left")
const btnScrollRight = document.querySelector("#btn-scroll-right")


btnScrollLeft.style.opactiy = "0"

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition += (val * scrollAmount)

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0
        btnScrollLeft.style.opactiy = "0"

    } else {
        btnScrollLeft.style.opactiy = "1"

    }

    if (currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll
    } else {
        btnScrollLeft.style.opactiy = "1 "

    }

    sCont.style.left = currentScrollPosition + "px"
}


// Iframe

function loadPage(url) {
    var iframe = document.getElementById("myIframe");
    iframe.src = url;


    iframe.onload = function() {
        setIframeHeight(iframe);
    };
}

function setIframeHeight(iframe) {
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}