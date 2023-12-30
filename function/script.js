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


// let mahasiswa = ['Tora Digda Kristiawan', 'PPPPPP', 'AAAAAAA'];

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.log(jumlahHuruf);
// // console.table(jumlahHuruf);





//================================this pada arrow=========================


//CONSTRUCTOR FUNCTION
// const mahasiswa = function (){
//     this.nama = 'tora';
//     this.umur = 18;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }
// }

// const tora = new mahasiswa();







//Arrow function
// const mahasiswa = function (){
//     this.nama = 'tora';
//     this.umur = 18;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }
// }

// const tora = new mahasiswa();





//Object literal
const mhs1 = {
    nama: 'tora',
    umur: 18,
    sayHello: () => {
        // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
        console.log(this);
    }
}


// const mahasiswa = function (){
//     this.nama = 'tora';
//     this.umur = 18;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }
// }

// const tora = new mahasiswa();


// const mahasiswa = function (){
//     this.nama = 'tora';
//     this.umur = 18;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }

//     setInterval(() =>{
//         console.log(this.umur++);
//     }, 500);

//     //hasil fungsi interval dibawah berbeda dengan fungsi interval di atas
//     setInterval(function (){
//         console.log(this.umur++);
//     }, 500);
// }

// const tora = new mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu,dua] = [dua,satu];
    }
    
    this.classList.toggle('satu');
    setTimeout(() => {
        this.classList.toggle('dua');
    }, 600);
});