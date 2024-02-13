function celebrate() {
    alert(" Selamat ulang tahun! 🥳🗿");
    var backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
}
function showConfetti() {
            var confettiImg = document.getElementById("confettiImg");
            confettiImg.style.display = "block";
        }
        
function kirimPesan() {
    var nomorWhatsApp = "6285825135585"; // Ganti dengan nomor WhatsApp Anda
    var pesan = "Halo! Selamat ulang tahun! Semoga hari ini menyenangkan!";
    window.open(
        "https://api.whatsapp.com/send?phone=" +
            nomorWhatsApp +
            "&text=" +
            encodeURIComponent(pesan)
    );
}
