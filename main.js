//Funcionalidad del carrusel

const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

let index = 0

let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 500)
}

function moveCarousel() {

    if (index > imagesCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length -1
    }

    images.style.transform = `translateX(-${index * 800}px)`
}

function prevSlide() {
    index--
    clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
    clearInterval(interval) 
    moveCarousel()
}

// Funcionalidad del formulario

document.getElementById("enviarForm").onclick = function(){
    x1 = true
    x2 = true
    x3 = true

    const el1 = document.getElementById("nombre").value;
    const el2 = document.getElementById("correo").value;
    const el3 = document.getElementById("mensaje").value;

    document.getElementById("nombre").value !== "" ? el1:x1 = false;
    document.getElementById("correo").value !== "" ? el2:x2 = false;
    document.getElementById("mensaje").value !== "" ? el3:x3 = false;

    x1 === true && x2 === true && x3 === true ? alert(`Nombre: ${el1} \nCorreo: ${el2} \nMensaje: ${el3} \n\nSu solicitud ha sido enviada`): alert("Introduzca los datos correctamente")
    // x1 === true && x2 === true && x3 === true ? alert("")
}