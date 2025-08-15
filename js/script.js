
// script.js
// Dokumentasi:
// File ini berisi fungsi-fungsi utama untuk interaksi pada halaman web.
// Dibuat untuk latihan coding camp.

console.log("Hello, World!")


// Fungsi untuk menyapa user saat masuk ke halaman
// welcomespeech();



/**
 * Menampilkan prompt untuk meminta nama user dan menampilkannya di elemen dengan id 'user-tamu'.
 */
function welcomespeech() {
    let userName = prompt("Please enter your name:");
    if (userName != '') {
        document.getElementById("user-tamu").textContent = userName;
    }
}


/**
 * Mengirim pesan yang diinput user. Jika kosong, akan muncul peringatan.
 */
function sendMessage() {
    let message = document.getElementById("user-message").value;
    if (message != '') {
        alert("Your message has been sent: " + message);
    } else {
        alert("Tolong diisi dulu ya sebelum mengirim.");
    }
}