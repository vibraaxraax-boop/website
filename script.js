// ===========================
// VIBRAAAX BEATS SCRIPT
// ===========================

// AUDIO PLAYER
let audio = new Audio();
let currentBeat = null;

// PLAY MUSIC
function playMusic(src, id) {

    // Stop current music
    audio.pause();
    audio.currentTime = 0;

    // Remove active class from previous beat
    if (currentBeat) {
        document.getElementById(currentBeat).classList.remove("active");
    }

    // Create new audio
    audio = new Audio(src);

    audio.play();

    // Save current beat
    currentBeat = id;

    // Add glow effect
    document.getElementById(id).classList.add("active");

}


// STOP MUSIC
function stopMusic() {

    audio.pause();
    audio.currentTime = 0;

    if (currentBeat) {
        document.getElementById(currentBeat).classList.remove("active");
    }

    currentBeat = null;

}


// ===========================
// CUSTOM CURSOR
// ===========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// ===========================
// CURSOR SCALE ON BUTTONS
// ===========================

const links = document.querySelectorAll("a, button");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.transform = "scale(2)";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.transform = "scale(1)";

    });

});


// ===========================
// SCROLL REVEAL EFFECT
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".beat,.section-card").forEach(el => {

    observer.observe(el);

});


// ===========================
// ACTIVE NAVBAR LINKS
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("nav-active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("nav-active");

        }

    });

});


// ===========================
// LOGO EFFECT
// ===========================

const logo = document.querySelector(".logo");

logo.addEventListener("mousemove", () => {

    logo.style.transform = "rotate(5deg) scale(1.05)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "rotate(0deg) scale(1)";

});


// ===========================
// AUTO REMOVE ACTIVE WHEN SONG ENDS
// ===========================

audio.addEventListener("ended", () => {

    if (currentBeat) {

        document.getElementById(currentBeat).classList.remove("active");

    }

    currentBeat = null;

});


// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero-img");

    let x = (window.innerWidth / 2 - e.pageX) / 50;

    let y = (window.innerHeight / 2 - e.pageY) / 50;

    hero.style.transform =
        `translate(${x}px,${y}px)`;

});


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("🔥 VIBRAAAX BEATS LOADED");