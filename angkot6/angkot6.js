var noAngkot = 1;
var angkotBeroperasi = 6;
var jumahAngkot = 10;

for(noAngkot = 1; noAngkot <= 10; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.'); 
        if(noAngkot === 5){
            console.log('Angkot No. ' + noAngkot + ' Sedang lembur');
        }
    }else if(noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' + noAngkot + ' Sedang lembur');
    }else{
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.');
    }
}