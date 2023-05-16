const menu = document.getElementById("menu");
const body = document.body;

function menu_open() {
  menu.classList.add("menu_open");
  body.classList.add("menu-open");
}

function menu_close() {
  menu.classList.remove("menu_open");
  body.classList.remove("menu-open");
}