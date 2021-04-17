let dates_timelineItem = document.querySelectorAll('.dates_timeline-item'),
    dates_resultBlock = document.querySelectorAll('.dates_resultBlock'),
    dates_timelineBlockMblBlockItem = document.querySelectorAll('.dates_timelineBlockMblBlock-item'),
    indexOfBlock = 0,
    isClick = false;

dates_timelineItem.forEach(item => {
    item.addEventListener('click', () => {
        if (!isClick) {
            isClick = true;
            document.querySelector('.dates_timeline-itemActive').classList.remove('dates_timeline-itemActive');
            if (item.classList != 'dates_timeline-itemActive') {
                item.classList.add('dates_timeline-itemActive');
                showResultDate(item.getAttribute('number'));
            }
        }
    })
})
dates_timelineBlockMblBlockItem.forEach(item => {
    item.addEventListener('click', () => {
        if (!isClick) {
            isClick = true;
            document.querySelector('.dates_timelineBlockMblBlock-itemActive').classList.remove('dates_timelineBlockMblBlock-itemActive');
            if (item.classList != 'dates_timelineBlockMblBlock-itemActive') {
                item.classList.add('dates_timelineBlockMblBlock-itemActive');
                showResultDate(item.getAttribute('number'));
                setTimeout(() => {
                    closeTimelineMobile();
                }, 400)
            }
        }
    })
})

const showResultDate = (index) => {
    dates_resultBlock[indexOfBlock].style.opacity = '0';
    setTimeout(() => {
        dates_resultBlock[indexOfBlock].style.display = 'none';
        dates_resultBlock[index].style.display = 'flex';
        setTimeout(() => {
            dates_resultBlock[index].style.opacity = '1';
            indexOfBlock = index;
            isClick = false;
        }, 300)
    }, 300)
}
showResultDate(indexOfBlock)



// OPEN TIMELINE FOR MOBILE VERSION
let dates_opentimelineBtn = document.querySelector('.dates_opentimelineBtn'),
    dates_mobileBtn = document.querySelector('.dates_mobileBtn'),
    dates_timelineBlockMbl = document.querySelector('.dates_timelineBlockMbl');

dates_opentimelineBtn.addEventListener('click', () => {
    openTimelineMobile();
})
dates_mobileBtn.addEventListener('click', () => {
    closeTimelineMobile();
})

const openTimelineMobile = () => {
    dates_opentimelineBtn.style.opacity = '0';
    dates_timelineBlockMbl.style.marginLeft = '0';
    setTimeout(() => {
        dates_opentimelineBtn.style.display = 'none';
    }, 300)
}

const closeTimelineMobile = () => {
    dates_timelineBlockMbl.style.marginLeft = '-57%';
    setTimeout(() => {
        dates_opentimelineBtn.style.display = 'flex';
        setTimeout(() => {
            dates_opentimelineBtn.style.opacity = '1';
        }, 300)
    }, 150)
}