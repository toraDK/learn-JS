//Destructuring

// function kalkulus(a, b) {
//     return [a + b, a-b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang,kali, bagi] = kalkulus(2,3); 
// console.log(bagi);

//tampa memperhatikan urutan
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

//Destructuring function arguments
const mhs1 = {
    nama: 'Tora Digda Kristiawan',
    umur: 18,
    email: 'toradigda@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

//Cara pertama
// function cetakMhs(nama, umur) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//Cara kedua
// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));