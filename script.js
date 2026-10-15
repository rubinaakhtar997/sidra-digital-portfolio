
/* =================================
   SIDRA'S DIGITAL MARKETING PORTFOLIO
================================= */

// Update footer year automatically
const year = new Date().getFullYear();
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `&copy; ${year} Sidra. All rights reserved.`;
}

// Smooth active navigation highlighting
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Reveal sections when scrolling
const revealElements = document.querySelectorAll(
    "#about, #skills article, #experience article, #projects article, #contact"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});
