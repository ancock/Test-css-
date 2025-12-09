/* ---------------------------
   Liquid Glass Animation Pack
   --------------------------- */

/* 1. Smooth Fade-In on Load */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in-ready");
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);
});


/* 2. Floating Glass Cards Animation */
const floatingElements = document.querySelectorAll(".card, .header, .footer");

floatingElements.forEach((el, i) => {
    const speed = 0.5 + Math.random() * 1.2;
    const offset = Math.random() * 30;

    function float() {
        const y = Math.sin((Date.now() / 1500) * speed + offset) * 6;
        el.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(float);
    }
    float();
});


/* 3. Mouse Parallax Movement */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    document.querySelector(".bg-ambient").style.transform =
        `translate(${x}px, ${y}px) scale(1.05)`;
});


/* 4. Background Glow Breathing */
const ambientBG = document.querySelector(".bg-ambient");
let glowTime = 0;

function animateGlow() {
    glowTime += 0.005;
    const intensity = Math.sin(glowTime) * 0.2 + 0.6;

    ambientBG.style.filter = `blur(40px) saturate(${100 + intensity * 40}%)`;

    requestAnimationFrame(animateGlow);
}
animateGlow();
