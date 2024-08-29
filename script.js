function toggleMusic() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

let slideIndex = 0;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    showSlide(slideIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showSlide(n) {
    const slides = document.getElementsByClassName("lightbox-slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

const countdownDate = new Date("Aug 30, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Chegou o Grande Dia!";
    }
}, 1000);


const map = L.map('map').setView([-21.6010455, -46.6394572], 13);

// Adiciona a camada de tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona o marcador para o Armazém Mirante
L.marker([-21.6010455, -46.6394572]).addTo(map)
    .bindPopup('Armazém Mirante')
    .openPopup();

// Adiciona um marcador para São Paulo
L.marker([-23.55052, -46.633308]).addTo(map)
    .bindPopup('Local especial');
