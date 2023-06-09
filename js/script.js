//toggle class actove
const navbarNaf = document.querySelector(`.navbar-nav`);

//ketika hamburger menu di klik
document.querySelector(`#menu`).onclick = () => {
  navbarNaf.classList.toggle(`active`);
};

//klik diluar sidebar untuk menglilangkan nav

const hamburgerMenu = document.querySelector(`#menu`);

document.addEventListener(`click`, function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNaf.contains(e.target)) {
    navbarNaf.classList.remove(`active`);
  }
});
