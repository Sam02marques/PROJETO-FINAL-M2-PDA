//CÓDIGO GLOBAL//
//Botoes acessibilidade//
const toggleTheme = document.getElementById('toggle-theme');
const toggleContrast = document.getElementById('toggle-contrast');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');

// Alternar modo claro/escuro
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleTheme.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
});

// Alternar alto contraste
toggleContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

let zoomLevel = 1;

const applyZoom = () => {
    document.body.style.zoom = zoomLevel;
};

zoomIn.addEventListener('click', () => {
    zoomLevel += 0.1; 
    applyZoom();
});

zoomOut.addEventListener('click', () => {
    zoomLevel -= 0.1; 
    applyZoom();
});

//navbar mobile
const button = document.querySelector(".navMobile")
const menu = document.querySelector(".navBarContainer");
button.addEventListener("click", ()=>{
menu.classList.toggle('active');
})