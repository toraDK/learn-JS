//Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Tora'));

// const tampilNama = (nama) => {return `Halo, ${nama}`;}
// console.log('Doddy Ferdiansyah');

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama};`
// }
// console.log('tora', 'siang');

//implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('Doddy Ferdiansyah');

// const tampilNama = () => 'Hello world!';
// console.log(tampilNama());


let mahasiswa = ['Tora Digda Kristiawan', 'PPPPPP', 'AAAAAAA'];

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.log(jumlahHuruf);
// console.table(jumlahHuruf);