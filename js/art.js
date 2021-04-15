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


// FILTERS
let filters_choosenColumnCheckbox = document.querySelectorAll('.filters_choosenColumn-checkbox'),
    content_cart = document.querySelectorAll('.art');

filters_choosenColumnCheckbox.forEach(item => {
    item.addEventListener('click', () => {
        let count = 0;
        content_cart.forEach(item => {
            item.style.opacity = "0";
            setTimeout(() => {
                item.style.display = "none";
            }, 250)
        })
        setTimeout(() => {
            filters_choosenColumnCheckbox.forEach(item => {
                if (item.checked) {
                    content_cart.forEach(block => {
                        if (item.id == block.getAttribute("year") || item.id == block.getAttribute("genre") || item.id == block.getAttribute("language") || item.id == block.getAttribute("pages")) {
                            block.style.display = "block";
                            setTimeout(() => {
                                block.style.opacity = "1";
                            }, 250)
                        }
                    })
                    count++;
                }
            })
            if (count <= 0) {
                content_cart.forEach(block => {
                    block.style.display = "block";
                    setTimeout(() => {
                        block.style.opacity = "1";
                    }, 250)
                })
            }
        }, 250)
    })
})