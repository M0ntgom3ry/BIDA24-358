// =========================
// Bread-Bean Bakery JS
// =========================

// Log when site loads
console.log("Bread-Bean Bakery Website Loaded Successfully");

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Simple form validation message (contact page)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been sent to Bread-Bean Bakery 🍞");

        form.reset();
    });
}

// Scroll effect for navbar (adds slight shadow on scroll)
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
        } else {
            navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        }
    }
});