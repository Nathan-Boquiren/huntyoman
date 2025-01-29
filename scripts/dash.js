let cl = console.log;

// DOM elements

const emailList = document.getElementById("email-list");
const copyBtn = document.getElementById("copy-btn");
const confirmationMsg = document.getElementById("copy-confirmation-msg");
const emailListUrl = "../email-list.json";

// Fetching email list
fetch(emailListUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((i) => {
      emailList.innerHTML += `
      <li class="email">${i.email}</li>
      `;
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

copyBtn.addEventListener("click", copyText);

const emailArray = [];

function copyText() {
  let emails = document.querySelectorAll(".email");

  emails.forEach((email) => {
    emailArray.push(email.innerHTML);
  });
  let emailTextToCopy = emailArray.join(", ");

  navigator.clipboard
    .writeText(emailTextToCopy)
    .then(function () {
      confirmationMsg.style.display = "block";
      confirmationMsg.classList.add("fade-in");
      setTimeout(() => {
        confirmationMsg.classList.remove("fade-in");
        confirmationMsg.classList.add("fade-out");
        setTimeout(() => {
          confirmationMsg.classList.remove("fade-out");
          confirmationMsg.style.display = "none";
        }, 300);
      }, 1000);
    })
    .catch(function (err) {
      console.error("Error copying text: ", err);
    });
}
