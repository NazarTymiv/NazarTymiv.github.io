// BIOGRAPHY BLOCK
let aboutWriter_more = document.querySelector('.aboutWriter_more'),
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