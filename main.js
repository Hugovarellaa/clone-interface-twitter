const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");

// Abre e fecha menu
for (let element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}
