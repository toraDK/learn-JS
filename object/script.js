// var mhs = {
//     nama : "Tora Digda",
//     umur : "18",
//     ips : [0,0,0],
//     alamat : {
//         jalan : "jalan pisang kipas",
//         kota : " malang",
//         provinsi : "jawa timur"
//     }
// };

//Cara untuk membuat object pada javascript
//1. Object Literal
//PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'tora',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'doddy',
//     energi: 20,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }

//2. funtion declaration

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat Tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let tora = Mahasiswa("tora",10);
// let doddy = Mahasiswa("doddy",15);











// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur!`;
// }

// let tora = new Mahasiswa('tora', 10);

//versi Class
// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan = function(porsi){
//         this.energi += porsi;
//         return `halo ${this.nama}, selamat makan!`;
//     }

//     main = function(jam){
//         this.energi -= jam;
//         return `halo ${this.nama}, selamat bermain!`;
//     }

//     tidur = function(jam){
//         this.energi += jam * 2;
//         return `halo ${this.nama}, selamat tidur!`;
//     }
// }

// let tora = new Mahasiswa('tora', 10);












//3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

// }

// let tora = new Mahasiswa('Tora', 10);

//4. Object.create