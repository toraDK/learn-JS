var tanya = true;


while (tanya) {
    var p = prompt('Pilih : gajah, semut, orang');

    var comp = Math.random;


    if(comp < 0.34){
        comp = ('gajah');
    }else if(comp >= 0.34 && comp < 0.67){
        comp = ('orang');
    }else{
        comp = ('semut');
    }
    
    var hasil = '';
    
    if(p == comp){
        hasil = 'SERI!';
    }else if(p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'MENANG!';
        // }else{
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    }else if(p == 'orang'){
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENAG!';
    }else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH';
    }else{
        hasil = 'inputan salah!'
    }
    
    alert('kamu memilih ' + p + ' komputer memilih ' + comp + '\nmaka hasilanya kamu ' + hasil);

    tanya = confirm('Apakah anda ingin main lagi?');
}

alert('Terima kasih sudah bermain');
