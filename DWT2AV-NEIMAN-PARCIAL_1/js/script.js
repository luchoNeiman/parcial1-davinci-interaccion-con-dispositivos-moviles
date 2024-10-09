const carousel = document.querySelector('.personajes-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * 20}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * 20}%)`;
    }
});







let currentIndex2 = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    currentIndex2++;
    if (currentIndex2 >= totalImages) {
        currentIndex2 = 0;
    }
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

setInterval(showNextImage, 5000); // Cambia cada 5 segundos







function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }