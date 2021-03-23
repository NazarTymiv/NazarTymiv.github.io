let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slide'),
    arrow_prev = document.querySelector('.arrow_prev'),
    arrow_next = document.querySelector('.arrow_next'),
    countSlide = 0,
    isHoverArrow = false;

arrow_prev.addEventListener('click', () => {
    countSlide == 0 ? countSlide = slide.length/2 : countSlide--;

    scrollSlider();
})
arrow_next.addEventListener('click', () => {
    countSlide == slide.length/2 ? countSlide = 0 : countSlide++;

    scrollSlider();
})
const scrollSlider = () => {
    let Step = slide[0].offsetWidth + 10;
    slides.style.marginLeft = `${-(Step * countSlide)}px`;
}
document.querySelectorAll('.arrow').forEach(item => {
    item.addEventListener('mouseover', () => {
        isHoverArrow = true;
    })
    item.addEventListener('mouseout', () => {
        isHoverArrow = false;
    })
})
document.querySelectorAll('.slide').forEach(item => {
    item.addEventListener('mouseover', () => {
        isHoverArrow = true;
    })
    item.addEventListener('mouseout', () => {
        isHoverArrow = false;
    })
})
setInterval(() => {
    if(!isHoverArrow){
        countSlide == slide.length/2 ? countSlide = 0 : countSlide++;

        scrollSlider();
    }
}, 5000);