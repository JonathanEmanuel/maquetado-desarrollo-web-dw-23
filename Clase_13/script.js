document.querySelector('.menu-mobile i').addEventListener('click', function(){
    document.querySelector('nav > ul').classList.toggle('visible')    
})

const imagenes = document.querySelectorAll('.img-lenguajes');
console.log(imagenes)

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function(){
        imagen.classList.toggle('animacion')
    })
});