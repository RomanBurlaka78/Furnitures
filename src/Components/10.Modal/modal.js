// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  
});

modalContainer.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  alert("nie")
});
