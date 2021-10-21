const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");



function changeHeaderScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  if (scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

function backTopButton() {
  const backTopButton = document.querySelector(".back-to-top");
  if (scrollY >= 560) {
    backTopButton.classList.add("show");
  } else {
    backTopButton.classList.remove("show");
  }
}

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
//   #contact .text, #contact .links,
//    footer .brand, footer .social,
//   `,
//   { interval: 100 }
// );

addEventListener("scroll", () => {
  changeHeaderScroll();
  backTopButton()
});

