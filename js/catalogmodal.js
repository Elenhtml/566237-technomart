var button_buy = document.querySelector(".button-buy");
var modal_message = document.querySelector(".modal-message");
var modal_message_close = document.querySelector(".modal-message-close");

button_buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_message.classList.add("modal-message-show");
});

modal_message_close.addEventListener("click", function() {
  modal_message.classList.remove("modal-message-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_message.classList.contains("modal-message-show")) {
      modal_message.classList.remove("modal-message-show");
    }
  }
});