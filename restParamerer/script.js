// Rest Parameter

// function myfunct(a, b, ...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// console.log(myfunct(1, 2, 3, 4, 5));


// function myfunct() {
//     return Array.from(arguments);
// }
// console.log(myfunct(1, 2, 3, 4, 5));


// function myfunct() {
//     return [...arguments];
// }
// console.log(myfunct(1, 2, 3, 4, 5));


// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a, b) => a + b);

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));



//Array Destructuring
// const kelompok1 = ['Tora', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);



//Object Destructurig
// const team = {
//     pm:'Tora',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const{pm, ...myTeam} = team;
// console.log(myTeam);



//Filtering
function filterbBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterbBy('boolean', 1, 2, 'Tora', false, 10, true, 'Doddy'));