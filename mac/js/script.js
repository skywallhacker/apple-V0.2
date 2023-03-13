let whiteBtn = document.querySelector('.white')

let greyBtn = document.querySelector('.grey')

let macColor = document.querySelector('.Mac_color')

let image = document.querySelector('.item img')

whiteBtn.onclick = () => {
    image.setAttribute('src', 'img/mbp14-spacegray-select-202110 1.png')
    whiteBtn.classList.toggle('activeBtn')
    if (greyBtn.classList.contains('activeBtn')) {
        greyBtn.classList.remove('activeBtn')
    }
    if (macColor.innerHTML === 'White') {
        macColor.innerHTML = 'White'
    } else {
        macColor.innerHTML = 'White'
    }
    

}

greyBtn.onclick = () => {
    image.setAttribute('src', 'img/mbp14-silver-select-202110 1.png')
    greyBtn.classList.toggle('activeBtn')
    if (whiteBtn.classList.contains('activeBtn')) {
        whiteBtn.classList.remove('activeBtn')
    }
    if (macColor.innerHTML === 'White') {
        macColor.innerHTML = 'Space Grey'
    } else {
        macColor.innerHTML = 'Space Grey'
    }
}



let one = document.querySelector('.one')

let two = document.querySelector('.two')

let three = document.querySelector('.three')

let four = document.querySelector('.for')

let price = document.querySelector('.item h3')

one.onclick = () => {
    one.classList.toggle('active')
    if (two.classList.contains('active') || three.classList.contains('active') || four.classList.contains('active')) {
        two.classList.remove('active')
        three.classList.remove('active')
        four.classList.remove('active')
    }
    price.innerHTML = '$1999'
    
}

two.onclick = () => {
    two.classList.toggle('active')
    if (one.classList.contains('active') || three.classList.contains('active') || four.classList.contains('active')) {
        one.classList.remove('active')
        three.classList.remove('active')
        four.classList.remove('active')
    }
    price.innerHTML = '$2199'
}

three.onclick = () => {
    three.classList.toggle('active')
    if (one.classList.contains('active') || two.classList.contains('active') || four.classList.contains('active')) {
        two.classList.remove('active')
        one.classList.remove('active')
        four.classList.remove('active')
    }
    price.innerHTML = '$2599'
}

four.onclick = () => {
    four.classList.toggle('active')
    if (one.classList.contains('active') || three.classList.contains('active') || two.classList.contains('active')) {
        two.classList.remove('active')
        three.classList.remove('active')
        one.classList.remove('active')
    }
    price.innerHTML = '$3199'
}

