//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration'));
// console.log(videos);

//pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// console.log(jsLanjut);

//ambil durasi masing2 video
    .map(item => item.dataset.duration)

//ubah durasi menjadi float ubah menit menjadi detik
    .map(waktu => {
        //10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

//jumlahkan semua detik
.reduce((total, detik) => total + detik);

//ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jumlahVideo} video`;