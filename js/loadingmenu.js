let show;

function load() {
  show = setTimeout(showPage, 100);
}
function showPage() {
  document.querySelector(".ring").style.display = "none";
  document.querySelector(".hide").style.display = "block";
}
