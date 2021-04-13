// NAVIGATION
let container = document.querySelector('.container'),
    nav_mobileBtnLine = document.querySelectorAll('.nav_mobileBtn-line'),
    nav_mobileBtn = document.querySelector('.nav_mobileBtn'),
    nav = document.querySelector('.nav'),
    links = document.querySelectorAll('.nav_li'),
    isActionNav = false;

nav_mobileBtn.addEventListener('click', () => {
    if (!isActionNav) {
        nav.style.display = 'flex';
        nav_mobileBtnLine[1].style.opacity = '0';
        setTimeout(() => {
            nav.style.opacity = "1";
            isActionNav = true;
            nav_mobileBtnLine[0].style.transform = "translateY(10px) translateY(-50%) rotate(-45deg)";
            nav_mobileBtnLine[2].style.transform = "translateY(-10px) translateY(50%) rotate(45deg)";
            container.style.height = "100vh";
        }, 100)
    } else {
        nav.style.opacity = "0";
        nav_mobileBtnLine[0].style.transform = "none";
        nav_mobileBtnLine[2].style.transform = "none";
        container.style.height = "auto";
        setTimeout(() => {
            nav.style.display = "none";
            isActionNav = false;
            nav_mobileBtnLine[1].style.opacity = "1";
        }, 100)
    }
})
links.forEach(item => {
    item.addEventListener('click', () => {
        if (body.offsetWidth <= 600) {
            nav.style.opacity = "0";
            nav_mobileBtnLine[0].style.transform = "none";
            nav_mobileBtnLine[2].style.transform = "none";
            container.style.height = "auto";
            setTimeout(() => {
                nav.style.display = "none";
                isActionNav = false;
                nav_mobileBtnLine[1].style.opacity = "1";
            }, 100)
        }
    })
})


// BIOGRAPHY BLOCK
let aboutWriter_more = document.querySelector('.aboutWriter_more'),
    html = document.querySelector('html'),
    aboutWriter_button = document.querySelector('.aboutWriter_button'),
    aboutWriter_moreCloseBtn = document.querySelector('.aboutWriter_moreClose-btn');

aboutWriter_button.addEventListener('click', () => {
    html.style.overflow = 'hidden';
    aboutWriter_more.style.display = 'flex';
    setTimeout(() => {
        aboutWriter_more.style.opacity = '1';
    }, 150)
})
aboutWriter_moreCloseBtn.addEventListener('click', () => {
    aboutWriter_more.style.opacity = '0';
    setTimeout(() => {
        html.style.overflow = 'auto';
        aboutWriter_more.style.display = 'none';
    }, 150)
})