document.querySelectorAll('.faq-item__question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.header__mobile-toggle');
const headerNav = document.querySelector('.header__nav');

mobileToggle.addEventListener('click', () => {
    headerNav.classList.toggle("active");
});

const headerItems = document.querySelectorAll(".header__nav-link");

for (let i = 0; i < headerItems.length; i++) {
    headerItems[i].addEventListener("click", function () {
        headerNav.classList.remove("active");
    });
}