//array method
var arr = ['tora', 'digda', 'kristiawan', 'dody', 'fitri'];

//1. method join method yang menggabungkan seluruh isi array dan menjadi string
// console.log(arr.join('-'));

// 2. push & pop
//push untuk menambah atau  memasukkan data pada array di index terakhir
// arr.push('anton', 'dody');
//pop untuk menghilangkan atau menghapus data array pada index terakhir
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));


//3. unshift & shift
//unshift menambahkan data baru pada array di index pertama
// arr.unshift('dodit');

//shift menghapus data pada awal array
// arr.shift();
// console.log(arr.join(' - '));

//4. spile untuk menyisipkan elemen array di tengah tengah
//syntax splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 1, 'sdfds', 'oiuy', 'qqqq')


//5. slice untuk mengiris sebuah array menjadi array yang baru
//syntax slice
//slice(awal, akhir)
// index awal akan terbawa pada index baru tetapi index akhir tidak
// var arr2 = arr.slice(1,3);
// console.log(arr2.join('-'));

//6. foreach

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['tora', 'digda', 'kristiawan', 'dody', 'fitri'];

// for(var i = 0; i <= angka.length; i++){
//     console.log(i);
// }

// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke- ' + i + ' adalah ' + e)
// })

//7. map mengembalikan nilai array
// var angka2 = angka.map(function(e) {
//     return e*2;
// })

// console.log(angka2.join('-'));

//8. sort mengurutkan nilai
// var angka = [1,2,3,4,8,5,6,7];

// console.log(angka.join('-'));
// angka.sort();
// console.log(angka.join('-'));

var angka = [1,2,20,3,4,40,8,5,6,7];

console.log(angka.join('-'));
angka.sort(function (a,b) {
    return a-b;
});
console.log(angka.join('-'));