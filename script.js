// ===== 3D PARTICLES BACKGROUND =====
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const eidDate = new Date("June 08, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eidDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-container").innerHTML = `
            <h2 style="font-size: 2.5rem; color: var(--neon);">Eid Mubarak! 🎉</h2>
            <p>The Festival of Sacrifice has arrived!</p>
        `;
    }
}

const countdown = setInterval(updateCountdown, 1000);
updateCountdown();

// ===== AI QUOTE GENERATOR =====
const quotes = [
    { text: "The best among you are those who bring greatest benefits to mankind.", author: "Prophet Muhammad (PBUH)" },
    { text: "Do not lose hope, nor be sad.", author: "Quran 3:139" },
    { text: "The strong is not the one who overcomes people by his strength, but the strong is the one who controls himself while in anger.", author: "Prophet Muhammad (PBUH)" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("ai-quote").textContent = quotes[randomIndex].text;
    document.getElementById("ai-author").textContent = `- ${quotes[randomIndex].author}`;
}

document.getElementById("generate-quote").addEventListener("click", generateQuote);
generateQuote(); // Initial quote

// ===== 3D TILT EFFECT =====
$('.card').tilt({
    scale: 1.05,
    glare: true,
    maxGlare: 0.2
});