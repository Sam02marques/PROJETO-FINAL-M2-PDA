//CÓDIGO GLOBAL//

//navbar mobile
const button = document.querySelector(".navMobile")
const menu = document.querySelector(".navBarContainer");
button.addEventListener("click", ()=>{
menu.classList.toggle('active');
})