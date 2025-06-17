// Page animation
document.body.classList.add("fade-in");
document.body.addEventListener("animationend", () => {
  document.body.classList.remove("fade-in");
});
