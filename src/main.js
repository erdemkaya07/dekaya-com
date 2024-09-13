/* Menu bar for Mobile and Tablet */
const btnMobile = document.querySelector(".btn-mobile");
const navMenu = document.querySelector(".nav-menu");

btnMobile.addEventListener("click", () => {
  btnMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    btnMobile.classList.remove("active");
    navMenu.classList.remove("active");
  });
});