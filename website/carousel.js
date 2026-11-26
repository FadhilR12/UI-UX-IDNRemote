// Beranda: Hero (mentor) dan Bidang (HP) digeser dengan swipe, tanpa tombol panah.
// Titik di bawahnya menandai kartu yang sedang terlihat, dan bisa diklik atau dipilih dengan keyboard.
document.querySelectorAll('.dots[data-track]').forEach((dots) => {
  const track = document.getElementById(dots.dataset.track);
  const buttons = [...dots.querySelectorAll('.dot')];
  const items = [...track.children];
  if (!track || !items.length) return;

  function setActive(i) {
    buttons.forEach((b, j) => {
      if (j === i) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }

  // Kartu yang paling dekat dengan tepi kiri jalur dianggap aktif
  function update() {
    const left = track.getBoundingClientRect().left;
    let best = 0;
    let dist = Infinity;
    items.forEach((item, i) => {
      const d = Math.abs(item.getBoundingClientRect().left - left);
      if (d < dist) { dist = d; best = i; }
    });
    // Di ujung jalur, kartu terakhir aktif walau tidak rata kiri
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) best = items.length - 1;
    setActive(best);
  }

  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  });

  buttons.forEach((b, i) => {
    b.addEventListener('click', () => {
      track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: 'smooth' });
      setActive(i);
    });
  });

  // Keyboard: saat Tab memfokus sesuatu di dalam kartu yang masih di luar jalur
  // (misalnya link Lihat semua mentor di slide terakhir), jalur digeser ke kartu itu
  track.addEventListener('focusin', (e) => {
    const i = items.findIndex((item) => item.contains(e.target));
    if (i < 0) return;
    track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: 'instant' });
    setActive(i);
  });

  // Keyboard: panah kiri dan kanan saat jalur difokus
  track.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const current = buttons.findIndex((b) => b.hasAttribute('aria-current'));
    const next = Math.min(items.length - 1, Math.max(0, current + (e.key === 'ArrowRight' ? 1 : -1)));
    buttons[next].click();
  });
});
