let cl = console.log;

cl(
  "This website was created by Nathan Boquiren. For your own personal website, or an online resume/cv, contact me at nathanjboquiren@gmail."
);

// === DOM Elements ===

const daysLeftWrapper = document.getElementById("days-left");
const hoursLeftWrapper = document.getElementById("hours-left");
const minutesLeftWrapper = document.getElementById("minutes-left");
const secondsLeftWrapper = document.getElementById("seconds-left");

const featuredMusicBtn = document.getElementById("featured-music-btn");
const featuredMusicImg = document.getElementById("featured-music-img");

const spotifyLinkWpr = document.getElementById("spotify-link");
const appleLinkWpr = document.getElementById("apple-link");
const amazonLinkWpr = document.getElementById("amazon-link");
const youtubeLinkWpr = document.getElementById("youtube-link");

const aboutBtn = document.getElementById("about-btn");

// === Variables and links ===

const links = {
  "spotify-link":
    "https://open.spotify.com/artist/1cdUa57VKRe88ODZxlO8WW?si=HaMpoMNWQUaIHdkXKI5H6Q",
  "apple-link": "https://music.apple.com/us/artist/huntyoman/1778314773",
  "amazon-link": "https://music.amazon.com/artists/B0DN1MXLYH/huntyoman",
  "youtube-link": "https://www.youtube.com/@Hunt_YoMan",
};

//
//
// ↓↓↓↓↓↓↓↓↓↓ CHANGE THIS VARIABLE TO NEW RELEASE DATE ↓↓↓↓↓↓↓↓↓↓

let releaseDate = new Date(`1/31/2025`);

// ↑↑↑↑↑↑↑↑↑↑ CHANGE THIS VARIABLE TO NEW RELEASE DATE ↑↑↑↑↑↑↑↑↑↑
//
//
//

// === Release Countdown ===

function updateCountdown() {
  let currentDate = new Date();
  let timeLeft = releaseDate - currentDate;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    daysLeftWrapper.innerHTML = `<div class="time-left-number">00</div><div class="time-unit">days</div>`;
    hoursLeftWrapper.innerHTML = `<div class="time-left-number">00</div><div class="time-unit">hours</div>`;
    minutesLeftWrapper.innerHTML = `<div class="time-left-number">00</div><div class="time-unit">minutes</div>`;
    secondsLeftWrapper.innerHTML = `<div class="time-left-number">00</div><div class="time-unit">seconds</div>`;
    cl("Release date reached");
    document.getElementById("release-countdown").style.display = "none";
    return;
  }

  let seconds = Math.floor((timeLeft / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");

  daysLeftWrapper.innerHTML = `<div class="time-left-number">${days}</div><div class="time-unit">days</div>`;
  hoursLeftWrapper.innerHTML = `<div class="time-left-number">${hours}</div><div class="time-unit">hours</div>`;
  minutesLeftWrapper.innerHTML = `<div class="time-left-number">${minutes}</div><div class="time-unit">minutes</div>`;
  secondsLeftWrapper.innerHTML = `<div class="time-left-number">${seconds}</div><div class="time-unit">seconds</div>`;
}

let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// === Button click events ===

featuredMusicBtn.addEventListener("click", () => {
  window.location = links["spotify-link"];
});
featuredMusicImg.addEventListener("click", () => {
  window.location = links["spotify-link"];
});

function musicLinkClick(name) {
  if (links[name]) {
    window.location = links[name];
  } else {
    cl("Invalid link");
  }
}

let musicLinks = document.getElementsByClassName("link-wrapper");

for (let link of musicLinks) {
  link.addEventListener("click", function () {
    musicLinkClick(link.id);
    cl(link.id);
  });
}

aboutBtn.addEventListener("click", () => {
  window.location = "pages/about.html";
});
// === Featured Music Parallax Effect ===

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".featured-music");
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = `${-scrollPosition * 0.3 + 400}px`;
});

window.addEventListener("scroll", function () {
  const parallax2 = document.querySelector(".links");
  let scrollPosition = window.pageYOffset;
  parallax2.style.backgroundPositionY = `${-scrollPosition * 0.3 + 670}px`;
});
