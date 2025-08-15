
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
function clearForm() {
  document.getElementById('nama').value = '';
  document.getElementById('tgl').value = '';
  document.querySelectorAll('input[name="jk"]').forEach(el => el.checked = false);
  document.getElementById('pesan').value = '';
}

function openModal(src) {
  const modal = document.getElementById('imgModal');
  const img = document.getElementById('modalImg');
  img.src = src;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('imgModal').classList.add('hidden');
}

// Tutup modal saat klik area gelap / tekan ESC
document.getElementById('imgModal').addEventListener('click', (e) => {
  if (e.target.id === 'imgModal') closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
function sendMessage(e) {
  if (e) e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const tglRaw = document.getElementById('tgl').value;
  const jkEl = document.querySelector('input[name="jk"]:checked');
  const pesan = document.getElementById('pesan').value.trim();

// Format tanggal ke dd/mm/yyyy
const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');

  // Pastikan tahun hanya 4 digit
  if (y.length !== 4 || isNaN(y)) {
    return 'Tahun tidak valid';
  }

  return `${d}/${m}/${y}`;
};

const tgl = formatDate(tglRaw);
const jk = jkEl ? jkEl.value : '';

const now = new Date().toLocaleString('id-ID', {
  weekday: 'long',   // nama hari
  day: 'numeric',    // tanggal
  month: 'long',     // nama bulan
  year: 'numeric',   // tahun
  hour: '2-digit',   // jam
  minute: '2-digit', // menit
  timeZoneName: 'short' // zona waktu (WIB/WITA/WIT)
});

  const preview = document.getElementById('preview');
  preview.innerHTML = `
    <p><strong>Current time</strong> : ${now}</p>
    <br>
    <p><strong>Nama</strong> : ${nama || '-'}</p>
    <p><strong>Tanggal Lahir</strong> : ${tgl || '-'}</p>
    <p><strong>Jenis Kelamin</strong> : ${jk || '-'}</p>
    <p><strong>Pesan</strong> : ${pesan || '-'}</p>
  `;


}