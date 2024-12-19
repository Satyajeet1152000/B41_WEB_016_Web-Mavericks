const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Adjust carousel position
    carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});
