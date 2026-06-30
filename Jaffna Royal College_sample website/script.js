let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    // remove active from all
    slides.forEach(slide => slide.classList.remove("active"));

    // next slide
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
}

// change every 3 seconds
setInterval(showSlide, 3000);