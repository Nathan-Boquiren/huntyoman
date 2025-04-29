let cl = console.log;

cl(
  "This website was created by Nathan Boquiren. For your own personal website, or an online resume/cv, contact me at nathanjboquiren@gmail."
);

// === DOM Elements ===
const homePage = document.getElementById("home-page");

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

const aboutBtns = document.querySelectorAll(".about-btn");

const emailForm = document.getElementById("email-form");

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

let releaseDate = new Date(`5/2/2025`);

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

// === Page Animations ===

homePage.classList.add("fade-in");
homePage.addEventListener("animationend", () => {
  homePage.classList.remove("fade-in");
});

aboutBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("fade-out");
    homePage.addEventListener(
      "animationend",
      () => {
        window.location = `https://huntyoman.com/pages/about.html`;
      },
      { once: true }
    );
  });
});

// === Parallax Effect ===

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  const parallaxElements = [
    { selector: ".featured-music", offset: 400 },
    { selector: ".links", offset: 750 },
    { selector: ".newsletter-section", offset: 1250 },
    { selector: "#release-countdown", offset: -200 },
    { selector: "#about-section", offset: 1000 },
    { selector: "#hero-2", offset: 200 },
    { selector: ".embedded-spotify", offset: 950 },
  ];

  parallaxElements.forEach((element) => {
    const parallax = document.querySelector(element.selector);
    if (parallax) {
      parallax.style.backgroundPositionY = `${
        -scrollPosition * 0.3 + element.offset
      }px`;
    }
  });
});

// === Fade on scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const linkWrappers = document.querySelectorAll(".link-wrapper");

  function onScroll() {
    linkWrappers.forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        wrapper.style.setProperty("--delay", wrapper.dataset.delay);
        wrapper.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Trigger on load
});
