let dates_timelineItem = document.querySelectorAll('.dates_timeline-item'),
    dates_resultBlock = document.querySelectorAll('.dates_resultBlock'),
    indexOfBlock = 0;

dates_timelineItem.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.dates_timeline-itemActive').classList.remove('dates_timeline-itemActive');
        if (item.classList != 'dates_timeline-itemActive') {
            item.classList.add('dates_timeline-itemActive');
            showResultDate(item.getAttribute('number'));
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
        }, 300)
    }, 300)
}
showResultDate(indexOfBlock)