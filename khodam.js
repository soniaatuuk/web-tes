const khodamList = [
    {
        name: "Harimau Ular",
        description: "cepat kayak harimau & licin kayak ular",
        issues: [
            "Si paling sat-set",
            "Update info beasiswa 24/7",
            "Langsung berangkat urus dokumen 1 menit setelah beasiswa dibuka"
        ]
    },
    {
        name: "Sapi Manja",
        description: "agak mager dikit",
        issues: [
            "Cuma save-save info doang tapi ga pernah dibuka",
            "Nunda-nunda nyicil persiapan",
            "Janji, besok belajar!, tapi gitu terus sampe tahun depan"
        ]
    },
    {
        name: "Buaya Darat",
        description: "Friendly tapi tetap produktif",
        issues: [
            "Si paling sharing info beasiswa dan ngajak teman sampe bikin story",
            "Public speaking 10/10, jago ambil hati penyeleski beasiswa",
            "Si paling 'yuk' kalau diajak ambis bareng"
        ]
    },
    {
        name: "Kucing Panik",
        description: "aduh-aduh, tapi ga maju-maju",
        issues: [
            "Selalu panik tiap liat pembukaan beasiswa",
            "Suka iri tiap liat teman kuliah diluar negeri",
            "Udah punya plan tapi ga maju-maju, keburu panik duluan"
        ]
    },
    {
        name: "Kanguru Kompak",
        description: "Selalu kompak dan konsisten",
        issues: [
            "Rajin ikut info session dan workshop beasiswa",
            "Langsung apply saat pembukaan beasiswa",
            "Bikin jadwal belajar buat prepare TOEFL, tapi sering bangun kesiangan."
        ]
    },
    {
        name: "Kelinci Kreatif",
        description: "Selalu cari solusi baru dan out-of-the-box",
        issues: [
            "Membuat proposal yang unik untuk setiap aplikasi beasiswa",
            "Berpartisipasi dalam kompetisi akademik untuk meningkatkan kredibilitas",
            "Menghadiri seminar internasional, tapi lebih sering jadi fotografer peserta."
        ]
    },
    {
        name: "Burung Hantu Pintar",
        description: "Senang belajar, tapi lebih senang sendirian",
        issues: [
            "Kuasai informasi beasiswa dari akun sosmed kampus",
            "Bangun dini hari buat baca dan belajar, sampe sering tertidur lagi",
            "Selalu jadi silent listener di forum beasiswa."
        ]
    },
    {
        name: "Cicak Ceria",
        description: "Rajin dan cepat beradaptasi",
        issues: [
            "Cari info beasiswa dari siang sampe tengah malem",
            "Sering ganti-ganti topik essay beasiswa, sampe dilema kualitas dan kuantitas.",
            "Suka nyanyi dan joget kalo lagi stress melamar beasiswa."
        ]
    },
    {
        name: "Anjing Loyal",
        description: "Setia sama tujuan, keras kepala dan agak ngeyel",
        issues: [
            "Ngecek email tiap 10 menit buat nunggu balasan dari aplikasi beasiswa",
            "Menghabiskan waktu 6 bulan buat proses aplikasi beasiswa",
            "Ketika gagal apply, langsung siap apply lagi, sampe kesel."
        ]
    },
    {
        name: "Cacing Rajin",
        description: "Suka rajin tapi terlalu fokus ke detail",
        issues: [
            "Perhatiin tiap detil syarat beasiswa, sampe sering overthinking",
            "Nulis essay beasiswa sampe berulang-ulang, saking detailnya",
            "Siap datang ke kantor beasiswa buat nanya ke sesama calon beasiswa."
        ]
    }
];

function hashCode(str) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return Math.abs(hash);
}

// Event listener untuk form submit
document.getElementById('khodam-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const uniqueString = name;
    const hashValue = hashCode(uniqueString);
    const randomIndex = hashValue % khodamList.length;
    const selectedKhodam = khodamList[randomIndex];

    // Menampilkan hasil di result-section
    document.getElementById('khodam-name').textContent = selectedKhodam.name;
    document.getElementById('khodam-description').textContent = selectedKhodam.description;

    // Menampilkan daftar issues
    const issuesList = document.getElementById('issues');
    issuesList.innerHTML = ''; // Kosongkan ulang daftar issues sebelumnya

    selectedKhodam.issues.forEach(issue => {
        const issueItem = document.createElement('li');
        issueItem.textContent = issue;
        issuesList.appendChild(issueItem);
    });

    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
});

