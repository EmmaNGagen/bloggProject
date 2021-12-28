window.onload = function () {
  theBarNav();
};

export function theBarNav() {
  let hamburger: HTMLDivElement = document.querySelector(".hamburger");
  let navMenu: HTMLUListElement = document.querySelector(".nav-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}
