const dialog = document.querySelector("dialog");
const showButton = document.getElementById("container-button");
const closeButton = document.getElementById("cancel");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
