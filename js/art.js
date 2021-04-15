let button = document.querySelector('.art_filtersSpoiler-arrowBlock'),
    content = document.querySelector('.art_filtersContent'),
    content_choosen = document.querySelector('.filters_choosen'),
    arrow = document.querySelector('.art_filtersSpoiler-arrow'),
    isActive = false;


button.addEventListener('click', () => {
    if (!isActive) {
        arrow.style.transform = 'scale(-1)';
        arrow.style.margin = '5px 0 0 0';
        isActive = true;
        content.style.height = '220px';
        content.style.marginTop = '0';
        setTimeout(() => {
            content_choosen.style.display = 'grid';
            setTimeout(() => {
                content_choosen.style.opacity = '1';
            }, 150)
        }, 150)
    } else {
        arrow.style.transform = 'scale(1)';
        arrow.style.margin = '0 0 5px 0';
        isActive = false;
        content.style.height = '0';
        content.style.marginTop = '-50px';
        content_choosen.style.opacity = '0';
        setTimeout(() => {
            content_choosen.style.display = 'none';
        }, 150)
        
    }
})