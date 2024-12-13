const shareIcon = document.querySelector(".share-background");
const showShareIcons = document.querySelector(".share-section");
const shareIcons = document.querySelectorAll(".rectangle img");

shareIcon.addEventListener("click", ShareWith);

for (let i = 0; i < shareIcons.length; i++) {
  shareIcons[i].addEventListener("click", ShareWithApp);
}

function ShareWith() {
  showShareIcons.style.display = "block";
}

function ShareWithApp() {
  showShareIcons.style.display = "none";
}
