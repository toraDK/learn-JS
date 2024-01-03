//for..of
// const mhs = ['Tora Digda Kristiawan', 'Doddy', 'Erik'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);    
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs){
//     console.log(m);
// }




//String\

// const nama = 'Tora';
// for(const n of nama){
//     console.log(n);
// }


// const mhs = ['Tora', 'Doddy', 'Erik'];

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const [i, m] of mhs.entries()){ //tambahkan .entries aggar index terbaca
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }



//NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for(n of liNama){
//     console.log(n.textContent);
// }




//arguments
// function jumlahkanAngka(params) {
//     // return arguments.reduce((a, i) => a + i);
//     // arguments.forEach(element => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));





//for..in
const mhs = {
    nama: 'Tora',
    umur: 18,
    email: 'ToraDigda@gmail.com'
}

for(n in mhs){
    console.log(n);
}
for(n in mhs){
    console.log(mhs[n]);
}

