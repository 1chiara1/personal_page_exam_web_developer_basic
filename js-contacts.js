/* MODAL CONTACTS*/

let myModalContacts = document.querySelector(".modalContacts");
let open = document.querySelector("#openModalContacts");
let close = document.querySelector("#closeModalContacts");


open.addEventListener("click", function () {
  myModalContacts.style.display = "block";
});

close.addEventListener("click", function () {
  myModalContacts.style.display = "none";
});



/* ALERT PER SUBMIT*/
let submit = document.querySelector("#submit");
submit.addEventListener("click", function(){
  alert("Per il momento non sono capace di salvare i tuoi dati, ma grazie lo stesso per avermeli lasciati!")
})


