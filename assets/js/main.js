const titleAnim = document.querySelector(".home__title_inside_anim");
let titleAnimInner = "";
const arrProjects = ["p", "r", "o", "j", "e", "c", "t", "s"];
const arrShow = ["s", "h", "o", "w", " ", "c", "a", "s", "e"];
let index = 0;
const body = document.querySelector("body");
const loader = document.querySelector(".loader");
const loaderGif = document.querySelector(".loader__gif");

body.onload = () => {
    body.style["overflow-y"] = "scroll";
    loader.style.visibility = "hidden";
    loader.style.opacity = "0";
    loaderGif.remove()

    setTimeout(() => {
        const projInterval = setInterval(() => {
            titleAnim.innerHTML += arrShow[index++];
            if (index === arrShow.length) {
                clearInterval(projInterval)
            }
        }, 70);

        setTimeout(() => {
            const pop = setInterval(() => {
                titleAnim.innerHTML = titleAnim.innerHTML.slice(0, titleAnim.innerHTML.length - 1);
                if (titleAnim.innerHTML.length === 0) {
                    clearInterval(pop);
                    index = 0;
                    setTimeout(() => {
                        const showInterval = setInterval(() => {
                            titleAnim.innerHTML += arrProjects[index++];
                            if (index === arrProjects.length) {
                                clearInterval(showInterval)
                            }
                        }, 70);
                    }, 1000)
                }
            }, 50);
        }, 2000);
    }, 1500)
}



const appSlide = document.querySelector(".app__slide");
let opacioty = 1;
if (window.innerWidth > 1150) {
    appSlide.style.opacity = "0.9"
    window.addEventListener("scroll", function windowScroll() {
        appSlide.style.opacity = ((appSlide.getBoundingClientRect().height - window.scrollY) / 600)
    })
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 1150) {
        appSlide.style.opacity = "0.9"
        window.addEventListener("scroll", function windowScroll() {
            appSlide.style.opacity = ((appSlide.getBoundingClientRect().height - window.scrollY) / 600)
        })
    }
    else if (window.innerWidth < 1151) {
        appSlide.style.opacity = "0.4"
        window.addEventListener("scroll", function windowScroll() {
            appSlide.style.opacity = "0.4"
        })
    }
})






// paralax
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".dots").forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translate(${x}px, ${y}px)`
    })
})






// burger-menu

const burgerMenu = document.querySelector(".burger-menu");
const headerNnav = document.querySelector(".header__nav_cont");
const burgerIcon = document.querySelector(".burger-icon");
let burgerBool = true;

burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    if (burgerBool) {
        headerNnav.style.opacity = "1";
        headerNnav.style.visibility = "visible";
        burgerIcon.setAttribute("class", "burger-icon fa fa-close")
        body.style["overflow-y"] = "hidden";
    }
    else {
        headerNnav.style.opacity = "0";
        headerNnav.style.visibility = "hidden";
        burgerIcon.setAttribute("class", "burger-icon fa fa-bars")
        body.style["overflow-y"] = "scroll";
    }
    burgerBool = !burgerBool;
})
document.addEventListener("click", () => {
    headerNnav.style.opacity = "0";
    headerNnav.style.visibility = "hidden";
    burgerIcon.setAttribute("class", "burger-icon fa fa-bars")
    body.style["overflow-y"] = "scroll";
    burgerBool = true;
})