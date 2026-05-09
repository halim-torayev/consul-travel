// navbar scroll effect (background changes to white smoothly)
const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });




// HERO SLIDER CODE
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);
// HERO SLIDER CODE (END)

//VIDEO SECTION (PLAYER FOR VIDEO)
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.querySelector(".video-player");

openVideo.addEventListener("click", () => {
  videoModal.classList.add("active");
  videoPlayer.play();
});

closeVideo.addEventListener("click", () => {
  videoModal.classList.remove("active");
  videoPlayer.pause();
});

videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.classList.remove("active");
    videoPlayer.pause();
  }
});
//VIDEO SECTION (PLAYER FOR VIDEO) (END) 