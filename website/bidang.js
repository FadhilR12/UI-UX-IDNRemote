// Beranda, Bidang di HP: tombol panah menggeser baris kartu satu bidang ke kiri atau kanan.
const bidangList = document.getElementById('bidang-list');

function geserBidang(arah) {
  const kartu = bidangList.querySelector('li');
  if (!kartu) return;
  const gap = parseFloat(getComputedStyle(bidangList).columnGap) || 0;
  bidangList.scrollBy({ left: arah * (kartu.offsetWidth + gap) });
}

document.getElementById('bidang-prev').addEventListener('click', () => geserBidang(-1));
document.getElementById('bidang-next').addEventListener('click', () => geserBidang(1));
