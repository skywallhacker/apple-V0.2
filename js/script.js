let changeImage = document.querySelector('#change_image')

let blue = document.querySelector('.color_blue')
let purple = document.querySelector('.color_purple')
let yellow = document.querySelector('.color_yellow')
let midnight = document.querySelector('.color_midnight')
let starlight = document.querySelector('.color_starlight')
let red = document.querySelector('.color_red')

blue.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-blue.jfif')
}
purple.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-purple.jfif')
}
yellow.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-yellow.jfif')
}
midnight.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-midnight.jfif')
}
starlight.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-starlight.jfif')
}
red.onclick = () => {
    changeImage.setAttribute('src', 'img/iphone-14-red.jfif')
}


