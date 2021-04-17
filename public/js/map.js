let map = document.querySelector('.mapContainer'),
    maps = document.querySelectorAll('.map'),
    mapContent_buttonsButton = document.querySelectorAll('.mapContent_buttons-button'),
    isDown = false,
    startX = 0,
    startY = 0,
    scrollLeft = 0,
    scrollTop = 0,
    numberOfMap = 1;

map.addEventListener('mousedown', (e) => {
    isDown = true;
    map.classList.add('activeMap');
    startX = e.pageX - map.offsetLeft;
    startY = e.pageY - map.offsetTop;
    scrollLeft = map.scrollLeft;
    scrollTop = map.scrollTop;
})
map.addEventListener('mouseup', () => {
    isDown = false;
    map.classList.remove('activeMap');
})
map.addEventListener('mouseleave', () => {
    isDown = false;
    map.classList.remove('activeMap');
})
map.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - map.offsetLeft;
    const y = e.pageY - map.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    map.scrollLeft = scrollLeft - walkX;
    map.scrollTop = scrollTop - walkY;
})
const fadeInMap = () => {
    maps[numberOfMap].style.display = 'flex';
    setTimeout(() => {
        maps[numberOfMap].style.opacity = '1';
    }, 300)
}
mapContent_buttonsButton.forEach(item => {
    item.addEventListener('click', () => {
        mapContent_buttonsButton[numberOfMap].classList.remove('activeButtonMap');
        item.classList.add('activeButtonMap');
        maps[numberOfMap].style.opacity = '0';
        setTimeout(() => {
            maps[numberOfMap].style.display = 'none';
            numberOfMap = item.getAttribute('number');
            fadeInMap();
        }, 300)
    })
})
fadeInMap();