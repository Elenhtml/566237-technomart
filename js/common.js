var button_buy = document.querySelector(".button-buy");
var modal_message = document.querySelector(".modal-message");
var modal_message_close = document.querySelector(".modal-message-close");

var button_write_us = document.querySelector(".button-write-us");
var write_us = document.querySelector(".modal-write-us");
var modal_write_us_close = write_us.querySelector(".modal-write-us-close");
var form = write_us.querySelector("form");
var name = write_us.querySelector("[name=name]");
var e_mail = write_us.querySelector("[name=e-mail]");
var letter = write_us.querySelector("[name=letter]");
var storage_name = localStorage.getItem("name");
var storage_e_mail = localStorage.getItem("e_mail");

var button_map = document.querySelector(".small-map");
var modal_map = document.querySelector(".modal-map");
var no_map = document.querySelector(".modal-map-close");

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

button_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();  
  write_us.classList.add("modal-write-us-show");
    
  if (storage_name && storage_e_mail) {
    name.value = storage_name; 
    e_mail.value = storage_e_mail;
    letter.focus ();
  } else {    
    name.focus();
  }   
});

modal_write_us_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  write_us.classList.remove("modal-write-us-show");
  write_us.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !e_mail.value || letter.value) {
    evt.preventDefault();
    write_us.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("e_mail", e_mail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (write_us.classList.contains("modal-write-us-show")) {
      write_us.classList.remove("modal-write-us-show");
      write_us.classList.remove("modal-error");
    }
  }
});

button_map.addEventListener("click", function (evt) {
  evt.preventDefault();  
  modal_map.classList.add("modal-map-show");
});
                            
no_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-map-show");
});
   
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_map.classList.contains("modal-map-show")) {
      modal_map.classList.remove("modal-map-show");
    }
  }
});


