var penumpang = [];

var tambahPenumpang = function (namapenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namapenumpang);
        return penumpang;
    }else{
        for (var i = 0; i < array.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namapenumpang;
                return penumpang;
            }else if (penumpang[i] == namapenumpang) {
                console.log(namapenumpang + ' sudah naik');
            }else if(i == penumpang.length - 1){
                penumpang.push(namapenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namapenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');
        return penumpang;
    }else{
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namapenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }else if (i == penumpang.length - 1) {
                console.log(namapenumpang + ' tidak ada di dalam angkot')
                return penumpang;
            }
            
        }
    }
}