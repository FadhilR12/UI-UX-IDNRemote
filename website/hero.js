// Beranda, Hero: kartu foto mentor, berganti lewat tombol panah.
// Data dari briefs/B/data/mentors.json (satu mentor per bidang). Tanpa putar otomatis: mode wireframe tanpa animasi.
const heroMentors = [
  { name: 'Nadia Rahma', title: 'Engineering manager di perusahaan logistik', rating: '4,9', sessions: 214, years: 12 },
  { name: 'Fajar Kurniawan', title: 'Engineering manager', rating: '4,9', sessions: 187, years: 11 },
  { name: 'Bagus Setiawan', title: 'Senior backend engineer dan pembicara konferensi', rating: '4,8', sessions: 132, years: 9 },
  { name: 'Hendra Wijaya', title: 'Technical recruiter di perusahaan teknologi', rating: '4,8', sessions: 176, years: 8 },
  { name: 'Putri Ayu', title: 'Talent acquisition lead di startup', rating: '4,7', sessions: 158, years: 7 },
  { name: 'Citra Maharani', title: 'Product manager di perusahaan global', rating: '4,6', sessions: 98, years: 10 },
];

let heroIndex = 0;

function showHeroMentor(i) {
  heroIndex = (i + heroMentors.length) % heroMentors.length;
  const m = heroMentors[heroIndex];
  document.getElementById('hero-photo-label').textContent = 'Foto ' + m.name;
  document.getElementById('hero-photo-name').textContent = m.name;
  document.getElementById('hero-photo-title').textContent = m.title;
  document.getElementById('hero-photo-stats').innerHTML =
    '<li><strong>' + m.rating + '</strong> rating</li>' +
    '<li><strong>' + m.sessions + '</strong> sesi</li>' +
    '<li><strong>' + m.years + '</strong> tahun pengalaman</li>';
}

document.getElementById('hero-prev').addEventListener('click', () => showHeroMentor(heroIndex - 1));
document.getElementById('hero-next').addEventListener('click', () => showHeroMentor(heroIndex + 1));
