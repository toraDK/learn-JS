// function init(){
//     //let nama = 'tora';
//     return function (nama){
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('tora');
// panggilNama('digda');


// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, semogaharimu menyenangkan!`)
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('tora');
// selamatMalam('digda');

// // console.dir(selamatMalam);


// let add = function (){
//     let counter = 0;
//     return function (){
//         ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());


let add = (function (){
    let counter = 0;
    return function (){
        ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());