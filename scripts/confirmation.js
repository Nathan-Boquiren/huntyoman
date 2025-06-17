const returnBtn = document.querySelectorAll(".return-btn");
const confirmationPage = document.body;

confirmationPage.classList.add("fade-in");
confirmationPage.addEventListener("animationend", () => {
  confirmationPage.classList.remove("fade-in");
});
returnBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    confirmationPage.classList.add("fade-out");
    confirmationPage.addEventListener(
      "animationend",
      () => {
        window.location = "https://huntyoman.com/";
      },
      { once: true }
    );
  });
});
