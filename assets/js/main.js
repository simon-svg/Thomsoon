const titleAnim = document.querySelector(".home__title_inside_anim");
let titleAnimInner = "";
const arrProjects = ["p", "r", "o", "j", "e", "c", "t", "s"];
const arrShow = ["s", "h", "o", "w", " ", "c", "a", "s", "e"];
let index = 0;


document.body.onload = () => {
    document.querySelector("body").style["overflow-y"] = "scroll";
    document.querySelector(".loader").style.display = "none";

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
    }, 1000)
}



const appSlide = document.querySelector(".app__slide");
let opacioty = 1;
window.addEventListener("scroll", () => {
    appSlide.style.opacity = ((appSlide.getBoundingClientRect().height - window.scrollY) / 600)
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