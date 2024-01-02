//Destructuring variable/ Assigment

//Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Tora Digda K"];

// // const [salam, satu, dua, nama] = perkenalan;

// //skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

//Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

//Destructuring Object
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33
// }

// const {nama, umur} = mhs;
// console.log(nama);


//Assigment tanpa deklarasi object
// ({nama, umur} = { nama: 'Tora Digda K', umur: 33 });
// console.log(nama);




//Assign ke variabel baru
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);


//Memberikan Default Value
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33
// }

// const {nama, umur, email = 'email@gmail.com'} = mhs;
// console.log(email);



//Memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33
// }

// const {nama: n, umur: u, email: e = 'email@gmail.com'} = mhs;
// console.log(e);



//Rest Parameter
// const mhs = {
//     nama: 'Tora Digda K',
//     umur: 33,
//     email: 'toradigda@gmail.com'
// }

// const {nama, ...args} = mhs;
// console.log(args);


//Menggambil field pada object, setelah dikirm sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Tora Digda Kristiawan',
    umur: 18,
    email: 'toradigda@gmail.com'
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs));