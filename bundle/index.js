"use strict";
let namaSaya = "Alvienas Yandika";
let userName = 123;
let isDead = false;
console.log(namaSaya);
console.log({ namaSaya }); //dengan kurung kurawal akan ada keterangan pada terminalnya
console.log({ userName });
console.log({ isDead });
/**
 * ts wajib menggunakan tipe data. jika seperti ini, maka akan default bertipe data "any"
 * maka akan bentrok nantinya
 */
// let pacarSaya; 
// pacarSaya= "Susanti";
// pacarSaya= 1;
// console.log(pacarSaya);
/**
 * seharusnya seperti ini
 */
let pacarSaya; //berikan langsung tipe data nya, jika ingin diantara kedua tipe data
pacarSaya = "Susanti";
pacarSaya = 1;
pacarSaya = true;
console.log({ pacarSaya });
/**
 * Misal kasusnya array (array biasa)
 */
let istriSaya; //maka tipe data arraynya (array biasa) harus dibuat seperti ini
istriSaya = ["Siti", "Sita"]; //karena isi array nya berupa string
console.log({ istriSaya });
/**
 * Array tuple type
 */
let gebetanSaya; //penulisannya seperti ini
gebetanSaya = ["Siti", 23, false];
console.log({ gebetanSaya });
let temanSaya;
temanSaya = {
    namaTeman: "Ilham",
    isKampret: true,
};
console.log({ temanSaya });
/**
 * Function
 */
function penjumlahan(a, b) {
    let jumlah = a + b;
    console.log(jumlah);
}
penjumlahan(1, 2);
const create = () => {
    return "Terima kasih";
};
console.log(create());
let umurAgnes;
umurAgnes = 23;
const createIntel = (processor) => {
    console.log(`Berhasil membuat processor dengan: 
        processor: ${processor.brand} 
        base model: ${processor.baseModel}
        tipe model: ${processor.modelName} 
        kecepatan clock: ${processor.clockSize}
        total core: ${processor.coreTotal}
        turbo boost enable: ${processor.turboBoost}
        `);
};
const createAMD = (processor) => {
    console.log(`Berhasil membuat processor dengan: 
        processor: ${processor.brand} 
        base model: ${processor.baseModel}
        tipe model: ${processor.modelName} 
        kecepatan clock: ${processor.clockSize}
        total core: ${processor.coreTotal}
        turbo boost enable: ${processor.precisionBoost}
        `);
};
const CoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11029f",
    clockSize: 4,
    coreTotal: "Octa Core",
    turboBoost: true
};
createIntel(CoreI5);
const Ryzen5 = {
    brand: "AMD",
    baseModel: "ryzen 5",
    modelName: "ryzen 5-5629H",
    clockSize: 5,
    coreTotal: "Hexa Core",
    precisionBoost: true
};
createAMD(Ryzen5);
