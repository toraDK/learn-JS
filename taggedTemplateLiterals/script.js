// //Tagged Templates
// const nama = 'Tora Digda Kristiawan';
// const umur = 18;

// function coba(strings, ...args){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${args[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);







//Highligt
const nama = 'Tora Digda Kristiawan';
const umur = 18;

function Highligt(strings, ...args){
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${args[i] || ''}</span>`, '');
}

const str = Highligt`Halo, nama saya ${nama}, saya ${umur} tahun.`;

document.body.innerHTML = str;
