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

// Scrollreveal -> Mostrar elementos suavemente quando rola scroll na pagina

// const scrollReveal = scrollReveal({
//   origin: "top",
//   distance: "30px",
//   duration: 700,
//   reset: true,
// });

// scrollReveal.reveal(
//   `
//   #home .text, #home .image,
//   #about .text, #about .image,
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials,
//   #contact .text, #contact .links
//   `,
//   { interval: 100 }
// );
