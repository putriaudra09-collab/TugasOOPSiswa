// const mobil = {
//     merek : "inova zenix hybrid",
//     warna : "putih",
//     tahun : "2020",

//     nyalakanMesin: function() {
//         console.log("mesin dinyalakan");
        
//     } 
// }

// console.log(mobil.merek);
// mobil.nyalakanMesin()


// console.log(mobil);

// function kendaraan() {
//     console.log(mobil);
    
// }

// kendaraan()

class mobil {
    constructor(merek, warna, tahun){
        this.merek = merek;
        this.warna = warna;
        this.tahun = tahun;
        this.kecepatan = 0;

    }
    
    nyalakanMesin() {
        console.log(`mobil ${this.merek} di nyalakan`);
        
    }

    jalankan() {
        this.kecepatan += 10
        console.log(`mobil berjalan dengan kecepatan ${this.kecepatan} km/h`);
        
    }
}

const mobil1 = new mobil("Inova", "hitam", 2025);
const mobil2 = new mobil("Avanza", "gray", 2019)

console.log(mobil1);
console.log(mobil2);
// mobil1.nyalakanMesin()
mobil2.nyalakanMesin()
mobil2.jalankan()