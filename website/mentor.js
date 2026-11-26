// Fakta mentor disalin dari briefs/B/data/mentors.json (tanpa backend, jadi ditulis di sini).
const MENTORS = [
  { id: 'nadia', name: 'Nadia Rahma', title: 'Engineering manager di perusahaan logistik', field: 'Negosiasi', years: 12, rating: 4.9, sessions: 214, summary: 'Menyiapkan negosiasi gaji, promosi, dan pindah perusahaan.', topics: ['Negosiasi gaji', 'Promosi', 'Pindah perusahaan'] },
  { id: 'hendra', name: 'Hendra Wijaya', title: 'Technical recruiter di perusahaan teknologi', field: 'Interview', years: 8, rating: 4.8, sessions: 176, summary: 'Simulasi interview dengan feedback langsung, dari pertanyaan perilaku sampai bercerita tentang proyek.', topics: ['Simulasi interview', 'Pertanyaan perilaku', 'Bercerita dengan metode STAR'] },
  { id: 'putri', name: 'Putri Ayu', title: 'Talent acquisition lead di startup', field: 'CV dan portofolio', years: 7, rating: 4.7, sessions: 158, summary: 'CV dan portofolio yang menunjukkan hasil kerjamu, bukan daftar tugas.', topics: ['Review CV', 'Portofolio', 'Profil LinkedIn'] },
  { id: 'bagus', name: 'Bagus Setiawan', title: 'Senior backend engineer dan pembicara konferensi', field: 'Presentasi', years: 9, rating: 4.8, sessions: 132, summary: 'Latihan presentasi dan demo sampai kamu tenang di depan tim dan klien.', topics: ['Demo fitur', 'Presentasi ke atasan', 'Mengatasi gugup'] },
  { id: 'citra', name: 'Citra Maharani', title: 'Product manager di perusahaan global', field: 'Bahasa Inggris untuk kerja', years: 10, rating: 4.6, sessions: 98, summary: 'Latihan percakapan kerja berbahasa Inggris dengan tim, atasan, dan klien dari luar negeri.', topics: ['Percakapan dengan klien', 'Bicara dengan atasan', 'Rapat berbahasa Inggris'] },
  { id: 'fajar', name: 'Fajar Kurniawan', title: 'Engineering manager', field: 'Memimpin tim', years: 11, rating: 4.9, sessions: 187, summary: 'Bersiap dari senior developer menjadi tech lead.', topics: ['Menjadi tech lead', 'One-on-one', 'Delegasi'] },
  { id: 'laras', name: 'Laras Sukma', title: 'Engineering lead di perusahaan remote internasional', field: 'Bahasa Inggris untuk kerja', years: 9, rating: 4.5, sessions: 74, summary: 'Percakapan kerja berbahasa Inggris: standup, code review, dan interview.', topics: ['Percakapan dengan tim', 'Standup berbahasa Inggris', 'Interview berbahasa Inggris'] },
  { id: 'yusuf', name: 'Yusuf Hidayat', title: 'Hiring manager di startup', field: 'Interview', years: 6, rating: 4.6, sessions: 63, summary: 'Persiapan interview di startup, sampai pertanyaan yang perlu kamu ajukan ke perusahaan.', topics: ['Interview startup', 'Bercerita tentang proyek', 'Pertanyaan untuk perusahaan'] },
];

const list = document.getElementById('mentor-list');
const count = document.getElementById('result-count');
const empty = document.getElementById('empty');
const form = document.getElementById('search-form');
const qInput = document.getElementById('q');

const rating = (n) => n.toFixed(1).replace('.', ',');

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  children.forEach((c) => node.append(c));
  return node;
}

function card(m) {
  // Seluruh kartu bisa diklik (stretched link), dengan link teks kecil sebagai penanda aksinya.
  // Tanpa tulisan yang terlihat: teks link hanya untuk screen reader, area kliknya seluruh kartu.
  const cta = el('a', { className: 'card-link card-link-hidden', href: `../app/daftar.html?mentor=${m.id}` }, [
    el('span', { className: 'sr-only', textContent: `Pesan sesi dengan ${m.name}` }),
  ]);

  return el('li', { className: 'card mentor-card mentor-card-clickable' }, [
    el('div', { className: 'mentor-card-top' }, [
      Object.assign(el('div', { className: 'ph photo ph-photo' }, [
        el('img', { src: `img/mentor-${m.id}.jpg`, alt: '', loading: 'lazy' }),
        el('span', { className: 'card-arrow', textContent: '↗' }),
      ]), { ariaHidden: 'true' }),
      el('div', {}, [
        el('h3', { textContent: m.name }),
        el('p', { className: 'muted', textContent: m.title }),
        el('span', { className: 'tag tag-under-name', textContent: m.field }),
      ]),
    ]),
    el('p', { textContent: m.summary }),
    el('div', {}, [
      el('p', { className: 'muted', textContent: 'Yang bisa kamu latih:' }),
      el('ul', { className: 'tags' }, m.topics.map((t) => el('li', { className: 'tag', textContent: t }))),
    ]),
    el('ul', { className: 'stats stats-spread' }, [
      el('li', {}, [el('strong', { textContent: rating(m.rating) }), ' rating']),
      el('li', {}, [el('strong', { textContent: String(m.sessions) }), ' sesi']),
      el('li', {}, [el('strong', { textContent: String(m.years) }), ' tahun pengalaman']),
    ]),
    cta,
  ]);
}

function render() {
  const q = qInput.value.trim().toLowerCase();
  const field = form.querySelector('input[name="bidang"]:checked').value;
  const result = MENTORS.filter((m) => {
    if (field && m.field !== field) return false;
    if (!q) return true;
    const haystack = [m.name, m.title, m.field, m.summary, ...m.topics].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  list.replaceChildren(...result.map(card));
  count.textContent = result.length ? `${result.length} mentor` : 'Belum ketemu';
  empty.hidden = result.length > 0;
  list.hidden = result.length === 0;
}

form.addEventListener('submit', (e) => e.preventDefault());
qInput.addEventListener('input', render);
form.addEventListener('change', render);
document.getElementById('reset').addEventListener('click', () => {
  form.reset();
  render();
  qInput.focus();
});

// Buka langsung dengan bidang tertentu, misalnya dari Beranda: mentor.html?bidang=Negosiasi
const preset = new URLSearchParams(location.search).get('bidang');
if (preset) {
  const radio = [...form.querySelectorAll('input[name="bidang"]')].find((r) => r.value === preset);
  if (radio) radio.checked = true;
}

render();
