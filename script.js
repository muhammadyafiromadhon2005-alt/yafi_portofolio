// ===============================
// SMOOTH SCROLL ACTIVE LINK
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(".section, .project-card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// PARALLAX HERO EFFECT
// ===============================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  hero.style.transform = `translateY(${offset * 0.2}px)`;
});


// ===============================
// CURSOR GLOW EFFECT
// ===============================
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


// ===============================
// INTERACTIVE CARD TILT
// ===============================
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// ===============================
// TYPING EFFECT (HERO TEXT)
// ===============================
const text = "Web3 Developer • AI Builder";
const target = document.querySelector(".hero p");

let i = 0;

function typing() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}

target.textContent = "";
typing();
