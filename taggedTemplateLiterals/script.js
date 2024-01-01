//Tagged Templates
const nama = 'Tora Digda Kristiawan';
const umur = 18;

function coba(strings, ...args){
    let result = '';
    strings.forEach((str, i) => {
        result += `${str}${args[i] || ''}`;
    });
    return result;
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);
