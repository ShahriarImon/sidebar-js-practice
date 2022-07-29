const menu = document.getElementById("menu");
const downSideList = document.getElementById("downSideList");
const bar = document.getElementById("bar");

menu.addEventListener("click", () => {
  bar.classList.toggle("hideSidebar");
});
