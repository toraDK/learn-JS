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

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

//     return mahasiswa;
// }

// let tora = Mahasiswa("tora",10);
// let doddy = Mahasiswa("doddy",15);

//3. Constructor Function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }

}

let tora = new Mahasiswa('Tora', 10);

//4. Object.create