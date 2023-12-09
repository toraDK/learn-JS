function jumlah2buahkubus(kubus1, kubus2) {
    
    var volume1;
    var volume2;
    var jumlah;

    volume1 = kubus1*kubus1*kubus1;
    volume2 = kubus2*kubus2*kubus2;

    jumlah = volume1 + volume2;

    return jumlah;
}

console.log(jumlah2buahkubus(8, 3));

