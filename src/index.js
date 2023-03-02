import './styles.sass'
import img from './matrix.jpg'

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = "Hello World! 2"
    elemH1.classList.add('title')

    return elemH1
}

function imageCompontent(){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    
    return elemImg
}

document.body.appendChild(titleComponent())
document.body.appendChild(imageCompontent())