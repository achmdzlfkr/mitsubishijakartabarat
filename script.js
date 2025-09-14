const btnMenu = document.getElementById("btnMenu");
const mobileMenu = document.getElementById("mobileMenu");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


/* SLIDE MODEL */
const slider = document.getElementById("modelsSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = slider.querySelectorAll(".model-card");

let currentIndex = 0;

function goToSlide(index) {
  currentIndex = Math.max(0, Math.min(index, cards.length - 1));
  slider.scrollTo({
    left: cards[currentIndex].offsetLeft - slider.offsetLeft,
    behavior: "smooth"
  });
}

prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));


/* LINK TEST DRIVE */
function sendToWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobil = document.getElementById("mobil").value;
  const tanggal = document.getElementById("tanggal").value;

  if (!nama || !telepon || !email || !mobil || !tanggal) {
    alert("Harap lengkapi semua data sebelum mengirim!");
    return;
  }

  // Nomor WA tujuan (format internasional tanpa +)
  const phone = "6281234567890";

  // Pesan default
  const message = `Halo, saya ingin daftar Test Drive Mitsubishi:
- Nama: ${nama}
- Telepon: ${telepon}
- Email: ${email}
- Mobil: ${mobil}
- Tanggal: ${tanggal}`;

  // Encode URL
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // 🔹 Reset form sebelum redirect
  document.querySelector(".test-drive-form form").reset();

  // Redirect ke WhatsApp
  window.open(url, "_blank");
}


/* MOBILE TOGGLE MENU */