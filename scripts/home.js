let btnsHome = document.querySelectorAll('.btn--home')
let btnsNav = document.querySelectorAll('.btn--navbar')

function circleBlurAnimation(btns, constant) {
    btns.forEach(btn => {
        btn.onclick = (e) => {
            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop - constant
            let circle = document.createElement('span')
            circle.style.left = x + 'px'
            circle.style.top = y + 'px'
            btn.appendChild(circle);
            setTimeout(() => {
                circle.remove()
            }, 1000)
        }
    })
}

circleBlurAnimation(btnsHome, 80);
circleBlurAnimation(btnsNav,0);


