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