document.addEventListener('DOMContentLoaded', e => {
    let p = document.createElement('p')
    p.textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.'

    let otherp = document.querySelector('p')
    otherp.textContent = 'This is really cool!'
})