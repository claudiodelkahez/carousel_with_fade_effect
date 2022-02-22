const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider = document.querySelector('.slider');

let sectionIndex = 0;


function reset() {
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.zIndex = 0;
        slider.children[i].style.opacity = 0;
    }
}
next.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 4;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
})

prev.addEventListener('click', () => {
    reset();
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
})