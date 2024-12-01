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

    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
}
    });
});