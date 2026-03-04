const reveals = document.querySelectorAll(".projects-grid");

const observer = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
},
{
    threshold: 0.2
}
);

reveals.forEach(el => observer.observe(el));


window.addEventListener("load", () => {
  document.querySelector(".home-section h1").classList.add("show");
  document.querySelector(".home-section p").classList.add("show");
});

