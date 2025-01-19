let cl = console.log;

cl(
  "This website was created by Nathan Boquiren. For your own personal website, or an online resume, contact me at nathanjboquiren@gmail."
);

// === DOM Elements ===

let featuredMusicBtn = document.getElementById("featured-music-btn");
let featuredMusicImg = document.getElementById("featured-music-img");

// === Variables and links ===

const spotifyLink =
  "https://open.spotify.com/artist/1cdUa57VKRe88ODZxlO8WW?si=HaMpoMNWQUaIHdkXKI5H6Q";

const appleMusicLink = "https://music.apple.com/us/artist/huntyoman/1778314773";

const amazonMusicLink = "https://music.amazon.com/artists/B0DN1MXLYH/huntyoman";

const youTubeLink = "https://www.youtube.com/@Hunt_YoMan";

// Button click events

featuredMusicBtn.addEventListener("click", () => {
  window.location = spotifyLink;
});
featuredMusicImg.addEventListener("click", () => {
  window.location = spotifyLink;
});
