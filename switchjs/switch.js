var item = prompt('Masukkan makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging' :
    case 'susu' :
        alert('makanan atau minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan atau minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukkan makanan atau minuman yang salah');
        break;
}