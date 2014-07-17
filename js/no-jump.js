console.log("before handler")

$("a[href^=#]").on("click", function(e) {
  e.preventDefault();
  console.log("Hallo")
  history.pushState({}, "", this.href);
});

iets = document.getElementById("iets1")
iets.onclick = new function() {
  #console.log("in iets1")
}