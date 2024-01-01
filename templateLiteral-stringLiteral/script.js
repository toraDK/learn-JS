// // Template Literals / Template String
// const nama = 'Sandhika';
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya 1' + nama + ', dan saya' + umur + 'tahun. ');

// // Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap': 'ganjil'}`);


// //1. HTML Fragments
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33,
//     nim: '2341720161',
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const el = `<div class="class">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`


// //2.Looping
// const mhs = [
//     {
//         nama: 'Tora Digda Kristiawan',
//         email: 'toradigda@gmail.com'
//     },
//     {
//         nama: 'erik',
//         email: 'erik@gmail.com'
//     },
//     {
//         nama: 'anton',
//         email: 'anton@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`



// //3. Conditionals
// //ternary
// const lagu = {
//     judul: 'kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

const mhs = {
    nama: 'Sandhika Galih',
    semester: 5,
    matakuliah: [
    'Rekayasa Web',
    'Analisis dan Perancangan Sistem Informasi',
    'Pemrograman Sistem Interaktif',
    'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(matakuliah){
    return `
    <ol>
        ${matakuliah.map(mk => `<li>${mk}</li>`)}
    </ol>
    `;
}
    
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;

