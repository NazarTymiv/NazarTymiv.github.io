let open_bio_button = document.querySelector('.aboutWriter_button')
    close_bio_button = document.querySelector('.close_bio_button')
    bio_content = document.querySelector('.bio_page')
    body = document.querySelector('.body')

open_bio_button.addEventListener('click', () => open_bio())
close_bio_button.addEventListener('click', () => close_bio())

const open_bio = () => {
    body.style.overflow = 'hidden'
    bio_content.style.display = 'flex'
    setTimeout(() => {
        bio_content.style.opacity = '1'
    }, 300)
    // bio_content.style.animationName = 'open_bio_window'

}

const close_bio = () => {
    body.style.overflow = 'scroll'
    bio_content.style.opacity = '0'
    setTimeout(() => {
        bio_content.style.display = 'none'
    }, 300)
    // bio_content.style.animationName = 'close_bio_window'
}