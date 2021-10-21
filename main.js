const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");
const header = document.querySelector("#header");

// Abre e fecha menu
for (let element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

//Rolagem do menu para os itens
for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

//Munda o header da pagina quando rolagem for ativada
const navHeight = header.offsetHeight;
addEventListener("scroll", () => {
  if (scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

