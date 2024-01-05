//Spread Operator
//memecah iterables menjadi single element

// const mhs = ['Tora', 'Dody', 'Erik'];
// console.log(...mhs[0]);





//Menggabungkan 2 Array
// const mhs = ['Tora', 'Dody', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// // const orang = mhs.concat(dosen);//menggabungkan 2 array bisa dengan menggunakan concat tetapi kekurangan nya ribet jika ingin menambahkan nilai diantara array yang digabung
// const orang = [...mhs, 'Aji', ...dosen];

// console.log(orang);



//Meng-copy Array
// const mhs = ['Tora', 'Dody', 'Erik'];

// //jika tanpa menggunakan spread operator maka saat mengganti salah satu nilai yang ada pada array yang dicopy maka array utamanya juga akan ikut berubah
// // const mhs1 = mhs;
// // mhs1[0] = 'Fajar';
// // console.log(mhs);
// // console.log(mhs1);

// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);
// console.log(mhs1);





// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);




const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;