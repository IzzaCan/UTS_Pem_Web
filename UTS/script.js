// Menggantikan ikon Feather
feather.replace();

// Toggle menu function
function toggleMenu() {
    const navMenu = document.querySelector('.nav ul');
    navMenu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
  
      alert(`Terima kasih ${name}, pesan sudah terkirim.`);
  
      form.reset();  // Mengosongkan form setelah submit
    });
  });
  