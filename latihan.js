// Buat class siswa 
// property: nama, nis, jurusan
// method: perkenalan()

class siswa {
    constructor(nama, nis, jurusan) {
        this.nama = nama
        this.nis = nis
        this.jurusan = jurusan
    }

    tambah() {
        return `nama : ${this.nama} - nis : ${this.nis} - jurusan : ${this.jurusan} `

        
    }
}


//ambil elemen dari html
const form = document.getElementById('formInput')
const list = document.getElementById('listSiswa')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value
    const nis = Number(document.getElementById('nis').value)
    const jurusan = document.getElementById('jurusan').value

    // membuat object dari class siswa
    const siswa1 = new siswa(nama, nis, jurusan)

    //tampilkan datanya
    const li = document.createElement("li")
    li.textContent = siswa1.tambah()

    list.appendChild(li);

})






// `Halo, perkenalkan nama saya ${this.nama}, dengan nis ${this.nis}, dari jurusan ${this.jurusan}`;