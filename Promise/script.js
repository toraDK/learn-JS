// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response))
//         }
//     }else {
//         console.log(xhr.responseText);
//     }

// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();


// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


//contoh1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


//contoh2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             resolve('Tidak Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(respone => console.log('OK! : ' + respone))
//     .catch(respone => console.log('NOT OK! : ' + respone));
// console.log('selesai');



const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'tora',
            pemeran: 'doddy, erik'
        }])
    }, 1000);
})


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 500);
})


// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })