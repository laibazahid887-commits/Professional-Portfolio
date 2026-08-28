// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.body.style.overflow = "hidden";

// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// CONTACT FORM + EMAILJS
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

emailjs.init({
    publicKey: "mhsV_XzRIyKePSY3s"
});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }

    formMessage.textContent = "Sending...";

    emailjs.sendForm(
        "service_8qhvebc",
        "template_kgng5xj",
        contactForm
    )

    .then(function () {

        formMessage.textContent =
            "Message sent successfully! ✓";

        contactForm.reset();

    })

   .catch(function(error) {
    console.log("FULL EMAILJS ERROR:", error);
    alert(JSON.stringify(error));
    formMessage.textContent = "Email sending failed.";
});

});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// =========================
// CINEMATIC PRELOADER
// =========================

const preloader = document.getElementById("preloader");
const loaderNumber = document.getElementById("loaderNumber");
const loaderLine = document.getElementById("loaderLine");

let progress = 0;

const loading = setInterval(() => {

    progress++;

    loaderNumber.textContent =
        String(progress).padStart(2, "0");

    loaderLine.style.width =
        `${progress}%`;

    if (progress >= 100) {

        clearInterval(loading);

        preloader.classList.add("exit");

        setTimeout(() => {

            preloader.classList.add("hide");

            document.body.style.overflow = "";

        }, 700);
    }

}, 28);


// =========================
// MOUSE FOLLOWING EFFECT
// =========================

const cursorGlow = document.querySelector(".cursor-glow");
const cursorDot = document.querySelector(".cursor-dot");

const particles = document.querySelectorAll(
    ".cursor-particles span"
);

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

let dotX = 0;
let dotY = 0;


// Mouse position

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


// Smooth animation

function animateCursor() {

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;

    cursorGlow.style.left =
        `${glowX}px`;

    cursorGlow.style.top =
        `${glowY}px`;

    cursorDot.style.left =
        `${dotX}px`;

    cursorDot.style.top =
        `${dotY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();


// =========================
// PARTICLE TRAIL
// =========================

let particleIndex = 0;

document.addEventListener("mousemove", (e) => {

    const particle = particles[particleIndex];

    particle.style.left =
        `${e.clientX}px`;

    particle.style.top =
        `${e.clientY}px`;

    particle.style.opacity = "1";

    particle.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(1)",
                opacity: 1
            },
            {
                transform:
                    "translate(-50%, -50%) scale(0)",
                opacity: 0
            }
        ],
        {
            duration: 700,
            easing: "ease-out"
        }
    );

    particleIndex =
        (particleIndex + 1) % particles.length;

});


// =========================
// INTERACTIVE ELEMENTS
// =========================

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card, .skill-card"
    );

interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add(
            "cursor-hover"
        );

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove(
            "cursor-hover"
        );

    });

});
 emailjs.init({
    publicKey: "mhsV_XzRIyKePSY3s"
  });