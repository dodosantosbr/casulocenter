  const numeroWhatsapp = '5534998042808';
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}`;

  document.addEventListener("DOMContentLoaded", () => {
    // Atribuição dinâmica dos links de WhatsApp
    document.getElementById('link-whatsapp-topo').href = linkWhatsapp;
    document.getElementById('link-whatsapp-menu').href = linkWhatsapp;
    document.getElementById('link-whatsapp-botao').href = linkWhatsapp;
    document.getElementById('link-whatsapp-sobre').href = linkWhatsapp;
    document.getElementById('link-whatsapp-float').href = linkWhatsapp;

    // Comportamento de dropdown acessível
    document.querySelectorAll(".dropbtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const currentDropdown = document.getElementById(
          btn.getAttribute("aria-controls")
        );
        const isExpanded = btn.getAttribute("aria-expanded") === "true";

        document.querySelectorAll(".dropbtn").forEach((otherBtn) => {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherDropdown = document.getElementById(
            otherBtn.getAttribute("aria-controls")
          );
          if (otherDropdown) {
            otherDropdown.style.display = "none";
          }
        });

        if (!isExpanded && currentDropdown) {
          btn.setAttribute("aria-expanded", "true");
          currentDropdown.style.display = "block";
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-item.dropdown")) {
        document.querySelectorAll(".dropbtn").forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
          const dropdown = document.getElementById(
            btn.getAttribute("aria-controls")
          );
          if (dropdown) {
            dropdown.style.display = "none";
          }
        });
      }
    });
  });