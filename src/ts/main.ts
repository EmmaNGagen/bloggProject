window.onload = function () {
  theBarNav();
};

function theBarNav() {
  let hamburger: HTMLDivElement = document.querySelector(".hamburger");
  let navMenu: HTMLUListElement = document.querySelector(".nav-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
