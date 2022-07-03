(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // refs.menu.classList.toggle("is-hidden");
    refs.menu.classList.toggle("menu-active");
    refs.body.classList.toggle("no-scroll");
  }
})();
