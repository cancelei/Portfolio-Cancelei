const menu__backdrop = document.getElementsByClassName("menu__backdrop")[0];
function menu__open() {
  document.body.classList.add("menu__open");
  menu__backdrop.addEventListener("click", menu__close);
}

function menu__close() {
  document.body.classList.remove -= "menu__open";
}
