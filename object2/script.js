//membuat objrct
//membuat object literal
var mhs1 = {
    nama : 'tora digda',
    nim : '23417200161',
    email : 'toradigda@gmial.com',
    jurusan : 'teknik informatika'
}

var mhs2 = {
    nama : 'ijat',
    nim : '234172001863',
    email : 'meh@gmial.com',
    jurusan : 'teknik informatika'
}

//function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('gopal', '01748438342', 'jajaja@gmail.com', 'Teknik Informatika');

//constructor
function Mahasiswa(nama, nim, email, jurusan) {
    //var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    //return this;
}

var mhs4 = new Mahasiswa('tora digda', '23417200161', 'toradigda@gmial.com', 'teknik informatika');