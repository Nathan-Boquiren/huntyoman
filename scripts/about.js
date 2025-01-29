// === DOM Elements ===
const aboutPage = document.getElementById("about-page");
const returnBtn = document.querySelectorAll(".return-btn");

// Page animation
aboutPage.classList.add("fade-in");
aboutPage.addEventListener("animationend", () => {
  aboutPage.classList.remove("fade-in");
});

// === Event Listeners ===
document.getElementById("listen-btn").addEventListener("click", () => {
  window.location =
    "https://open.spotify.com/artist/1cdUa57VKRe88ODZxlO8WW?si=HaMpoMNWQUaIHdkXKI5H6Q";
});

returnBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutPage.classList.add("fade-out");
    aboutPage.addEventListener(
      "animationend",
      () => {
        window.location = "../pages/index.html";
      },
      { once: true }
    );
  });
});
