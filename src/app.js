const menuToggle = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener("click", ()=> {
     console.log("Click Ham.")
     menuToggle.classList.toggle("hidden");
});
