(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button-burger'),
    closeMenuBtn: document.querySelector('.menu__button-close'),
    menu: document.querySelector('.menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();