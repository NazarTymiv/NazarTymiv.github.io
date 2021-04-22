// SLIDER
let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slide'),
    body = document.getElementsByTagName('body')[0]
    arrow_prev = document.querySelector('.arrow_prev'),
    arrow_next = document.querySelector('.arrow_next'),
    countSlide = 0,
    isHoverArrow = false;

arrow_prev.addEventListener('click', () => {
    if (body.offsetWidth > 1024) {
        countSlide == 0 ? countSlide = slide.length / 2 : countSlide--;
    } else if (body.offsetWidth <= 1024 && body.offsetWidth > 600) {
        countSlide == 0 ? countSlide = (slide.length / 2) + 1 : countSlide--;
    } else {
        countSlide == 0 ? countSlide = (slide.length / 2) + 2 : countSlide--;
    }

    scrollSlider();
})
arrow_next.addEventListener('click', () => {
    if (body.offsetWidth > 1024) {
        countSlide == slide.length / 2 ? countSlide = 0 : countSlide++;
    } else if (body.offsetWidth <= 1024 && body.offsetWidth > 600) {
        countSlide == (slide.length / 2) + 1 ? countSlide = 0 : countSlide++;
    } else {
        countSlide == (slide.length / 2) + 2 ? countSlide = 0 : countSlide++;
    }

    scrollSlider();
})
const scrollSlider = () => {
    let Step =0;
    body.offsetWidth > 600 ? Step = slide[0].offsetWidth + 10 : Step = slide[0].offsetWidth + 9;
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
    if (!isHoverArrow) {
        if (body.offsetWidth > 1024) {
            countSlide == slide.length / 2 ? countSlide = 0 : countSlide++;
        } else if (body.offsetWidth <= 1024 && body.offsetWidth > 600) {
            countSlide == (slide.length / 2) + 1 ? countSlide = 0 : countSlide++;
        } else {
            countSlide == (slide.length / 2) + 2 ? countSlide = 0 : countSlide++;
        }

        scrollSlider();
    }
}, 5000);
