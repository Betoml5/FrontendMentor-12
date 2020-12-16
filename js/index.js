// GUARDAS LOS TEXTOS EN CONSTANTES:
// Y en cada click cambias el texto
var i = 0;

const btn_next = document.querySelector('#btn_next')
const btn_back = document.querySelector('#btn_back')
const container_main = document.querySelector('#container_main')
const p_change = document.querySelector('#p_change');


btn_next.addEventListener('click', () => {
    i > 2 ? i = 0 : 
    console.log('click');
    container_main.style.backgroundImage= `url(${arrayImage[i]})`
    i += 1;



})

btn_back.addEventListener('click', () => {
    i < 0 ? i = 2 : 
    console.log('click');
    container_main.style.backgroundImage= `url(${arrayImage[i]})`
    i -= 1;
})

const arrayImage = [
    './images/desktop-image-hero-1.jpg',
    './images/desktop-image-hero-2.jpg',
    './images/desktop-image-hero-3.jpg'
]


    