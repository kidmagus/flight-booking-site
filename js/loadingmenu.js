let show;

function load() {
  show = setTimeout(showPage, 1000);
}
function showPage() {
  document.querySelector(".ring").style.display = "none";
  document.querySelector(".hide").style.display = "block";
}
