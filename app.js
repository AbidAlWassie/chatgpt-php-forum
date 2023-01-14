// Get the button and the navigation menu
let menuBtn = document.getElementById("menu-button");
let nav = document.getElementsByTagName("nav")[0];

// Add a click event listener to the button
menuBtn.addEventListener("click", function() {
  // Toggle the "menu-open" class on the navigation menu
    nav.classList.toggle("menu-open");
});

let postBtn = document.getElementById("create-post-button");
let dropdown = document.getElementById("create-post-dropdown");

postBtn.addEventListener("click", function() {
    dropdown.classList.toggle("hidden");
});

let signupLink = document.getElementById("signup-link");
let loginLink = document.getElementById("login-link");
let signupModal = document.getElementById("signup-modal");
let loginModal = document.getElementById("login-modal");
let signupClose = document.querySelector("#signup-modal");
let loginClose = document.querySelector("#login-modal");

signupLink.addEventListener("click", function(e) {
    e.preventDefault();
    signupModal.classList.remove("hidden");
});

loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    loginModal.classList.remove("hidden");
});

signupClose.addEventListener("click", function(){
    signupModal.classList.add("hidden");
});
loginClose.addEventListener("click", function(){
    loginModal.classList.add("hidden");
});
