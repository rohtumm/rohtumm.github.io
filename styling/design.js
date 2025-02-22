document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".design-gallery img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
});
