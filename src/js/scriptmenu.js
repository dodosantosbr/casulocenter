document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-box[data-menu]");
  const sections = document.querySelectorAll(
    "#banhoDeErvas, #banhoRevi, #banhoDetox, #banhoAnti, #banhoRelax, #banhoMaca, #banhoLeite, #banhoVinho, #banhoRosas, #banhoChoc, #banhoSpa, #banhoChoco, #banhoAveia, #banhoMara, #banhoBeterraba, #banhoGold, #sauna, #banhoKids"
  );

  menuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-menu");

      sections.forEach((section) => {
        if (section.id === targetId) {
          const isVisible = section.style.display === "block";
          section.style.display = isVisible ? "none" : "block";
          if (!isVisible) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          section.style.display = "none"; // Oculta os outros
        }
      });
    });
  });

  // Oculta todas as seções ao carregar
  sections.forEach((section) => {
    section.style.display = "none";
  });
});

function fecharMenu(button) {
  const menu = button.closest(".conteudo-menu");
  if (menu) {
    menu.style.display = "none";
  }
}
