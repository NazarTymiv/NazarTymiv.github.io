let button = document.querySelector('.art_filtersSpoiler-arrowBlock'),
    content = document.querySelector('.art_filtersContent'),
    content_choosen = document.querySelector('.filters_choosen'),
    arrow = document.querySelector('.art_filtersSpoiler-arrow'),
    body = document.querySelector('body'),
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
            }, 300)
        })
        setTimeout(() => {
            filters_choosenColumnCheckbox.forEach(item => {
                if (item.checked) {
                    content_cart.forEach(block => {
                        if (item.id == block.getAttribute("year") || item.id == block.getAttribute("genre") || item.id == block.getAttribute("language") || item.id == block.getAttribute("pages") || item.id.slice(0, -3) == block.getAttribute("year") || item.id.slice(0, -3) == block.getAttribute("genre") || item.id.slice(0, -3) == block.getAttribute("language") || item.id.slice(0, -3) == block.getAttribute("pages")) {
                            block.style.display = "block";
                            setTimeout(() => {
                                block.style.opacity = "1";
                            }, 300)
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
                    }, 300)
                })
            }
        }, 300)
        if(body.offsetWidth <= 600){
            setTimeout(() => {
                closeFilterBlockMbl();
            }, 300)
        }
    })
})


// SHOW OUTPUT BLOCK
let art_button = document.querySelectorAll('.art_button'),
    art_outputBlock = document.querySelector('.art_outputBlock'),
    art_outputBlock_CloseBtn = document.querySelector('.art_outputBlock_Close-btn');

art_button.forEach(item => {
    item.addEventListener('click', () => {
        html.style.overflow = 'hidden';
        art_outputBlock.style.display = 'flex';
        setTimeout(() => {
            art_outputBlock.style.opacity = '1';
        }, 150)
    })
})
art_outputBlock_CloseBtn.addEventListener('click', () => {
    art_outputBlock.style.opacity = '0';
    setTimeout(() => {
        html.style.overflow = 'auto';
        art_outputBlock.style.display = 'none';
    }, 150)
})


// RESIZE BOOK FUNCTION

let artGallery = document.querySelector('.art_galery'),
    art = document.querySelectorAll('.art')[0],
    w = art.offsetWidth;

const resizeBook = () => {
    artGallery.style.gridTemplateRows = `repeat(4, ${w + 175}px)`;
}

resizeBook();


// OPEN FILTER FOR PHONE
let art_filtersBtnMb = document.querySelector('.art_filtersBtnMb'),
    art_filtersBlockMbCloseBtn = document.querySelector('.art_filtersBlockMb-closeBtn'),
    art_filtersBlockMb = document.querySelector('.art_filtersBlockMb');

art_filtersBtnMb.addEventListener('click', () => {
    openFilterBlockMbl();
})
art_filtersBlockMbCloseBtn.addEventListener('click', () => {
    closeFilterBlockMbl();
})

const openFilterBlockMbl = () => {
    art_filtersBlockMb.style.display = 'flex';
    html.style.overflow = 'hidden';
    setTimeout(() => {
        art_filtersBlockMb.style.opacity = '1';
    }, 150)
}

const closeFilterBlockMbl = () => {
    art_filtersBlockMb.style.opacity = '0';
    setTimeout(() => {
        art_filtersBlockMb.style.display = 'none';
        html.style.overflow = 'auto';
    }, 500)
}