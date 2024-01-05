//Callback
// //Synchronous Callback
// // function halo(namaku) {
// //     alert(`Halo, ${namaku}`);
// // }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// // tampilkanPesan(halo);

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// const mhs = [
//     {
//         "nama": "Tora Digda Kristiawan",
//         "nim": "2341720161",
//         "email": "toradigda@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Dody",
//         "nim": "000000000",
//         "email": "Dody@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Erik",
//         "nim": "11111111",
//         "email": "Erikgmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }

//     console.log(m.nama)
// });
// console.log("selesai");


//jalankan kode diwah menggunakan htdoc atau live server
function getDataMahasiswa (url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            }else if(xhr.status === 404){
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}


// function success(result){
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }

// function error(){
//     console.log('error')
// }

console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', result => {
    const mhs = JSON.parse(result);
    mhs.forEach(m => console.log(m.nama));
}, () => {

});
// getDataMahasiswa('data/mahasiswa.json', success, error);
console.log('selesai');

//JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');
