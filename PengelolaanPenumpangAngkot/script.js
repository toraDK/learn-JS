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