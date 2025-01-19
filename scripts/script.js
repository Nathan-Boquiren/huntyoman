let cl = console.log;

cl(
  "This website was created by Nathan Boquiren. For your own personal website, or an online resume, contact me at nathanjboquiren@gmail."
);

// === DOM Elements ===

const featuredMusicBtn = document.getElementById("featured-music-btn");
const featuredMusicImg = document.getElementById("featured-music-img");

const spotifyLinkWpr = document.getElementById("spotify-link");
const appleLinkWpr = document.getElementById("apple-link");
const amazonLinkWpr = document.getElementById("amazon-link");
const youtubeLinkWpr = document.getElementById("youtube-link");

// === Variables and links ===

const links = {
  "spotify-link":
    "https://open.spotify.com/artist/1cdUa57VKRe88ODZxlO8WW?si=HaMpoMNWQUaIHdkXKI5H6Q",
  "apple-link": "https://music.apple.com/us/artist/huntyoman/1778314773",
  "amazon-link": "https://music.amazon.com/artists/B0DN1MXLYH/huntyoman",
  "youtube-link": "https://www.youtube.com/@Hunt_YoMan",
};

// Button click events

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
