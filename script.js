document.querySelector("#tid_button").addEventListener("mouseenter", startAnimation);

function startAnimation() {
  console.log("startAnimation");
  document.querySelector(".tid").classList.add("time");
}
document.querySelector("#tid_button").addEventListener("animationend", slutAnimation);

function slutAnimation() {
  console.log("slutAnimation");
  document.querySelector("#tid_button").textContent = "Afspiller nu";
}
