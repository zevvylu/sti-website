/* GSAP CODE BELOW - For scrolling navigation traffic light animation */

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Traffic light elements - array here
const lights = {
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  green: document.getElementById("green")
};

// ScrollTrigger for home (Red Light)
ScrollTrigger.create({
  trigger: "#home",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(lights.red, { backgroundColor: "#ff3333", opacity: 1 });
  },
  onLeave: () => {
    gsap.to(lights.red, { backgroundColor: "#333", opacity: 1 });
  },
  onEnterBack: () => {
    // Reverse effect when scrolling up
    gsap.to(lights.red, { backgroundColor: "#ff3333", opacity: 1 });
    gsap.to(lights.yellow, { backgroundColor: "#333", opacity: 1 });
    gsap.to(lights.green, { backgroundColor: "#333", opacity: 1 });
  }
});

// ScrollTrigger for info (Yellow Light)
ScrollTrigger.create({
  trigger: "#info",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.to(lights.yellow, { backgroundColor: "#ffcc00", opacity: 1 });
  },
  onLeave: () => {
    gsap.to(lights.yellow, { backgroundColor: "#333", opacity: 1 });
    gsap.to(lights.green, { backgroundColor: "#33cc33", opacity: 1 });
  },
  onEnterBack: () => {
    // Reverse traffic light effect when scrolling up
    gsap.to(lights.yellow, { backgroundColor: "#ffcc00", opacity: 1 });
    gsap.to(lights.green, { backgroundColor: "#333", opacity: 1 });
  }
});

// ScrollTrigger for STI Clinics (Green Light)
ScrollTrigger.create({
  trigger: "#STI-Clinics",
  start: "top center",
  onEnter: () => {
    gsap.to(lights.green, { backgroundColor: "#33cc33", opacity: 1 });
  }
});

/* GSAP CODE END------------------------------------------------------------ */


/* SLIDESHOW CODE BELOW ----------------------------------------------------- */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls - function 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Loop below brief requirement
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Boundary checks for slideIndex
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/* SLIDESHOW CODE END ----------------------------------------------------- */


/* MUSIC CODE BELOW ------------------------------------------------------- */

// Load background music and create the audio object
const bgMusic = new Audio('audio/pixel-dreams-259187.mp3');
bgMusic.preload = "auto";  // Preload the audio file for faster start

// Get the sound button element
const soundBtn = document.querySelector('#sound-btn');

// Event listener for the sound button
soundBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play(); // Play the music if it's paused
    soundBtn.name = 'volume-up';  // Update the button icon (assumes you use FontAwesome or similar)
  } else {
    bgMusic.pause(); // Pause the music if it's playing
    soundBtn.name = 'volume-mute';  // Update the button icon
  }
});
/* MUSIC CODE END ------------------------------------------------------- */

