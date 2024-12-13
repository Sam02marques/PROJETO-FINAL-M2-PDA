// CÓDIGO ESPECÍFICO DO Contact.html
// PARTE DO FUNCIONAMENTO DO MODAL
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("denunciaForm");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Ao enviar o formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita o reload da página
      modal.style.display = "block"; // Mostra o modal
      form.reset(); // Limpa os campos do formulário
    });

    // Fechar o modal ao clicar no "x"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

});

// Seleciona o botão e a lista de navegação
const navButton = document.querySelector("navMobile");
const navBar = document.querySelector("navBarContainer");

// Adiciona o evento de clique
navButton.addEventListener("click", () => {
  navBar.classList.toggle("active"); // Adiciona ou remove a classe "active"
});

// Fechar o menu se clicar em algum item (opcional)
const navItems = document.querySelectorAll("listHeader li a");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navBar.classList.remove("active"); // Fecha o menu
  });
});

