const toggleBtn = document.getElementById("view-toggle");
const resources = document.getElementById("resource-container");

toggleBtn.addEventListener("click", () => {
  resources.classList.toggle("list-mode");
});