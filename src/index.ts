let namaSaya: string = "Alvienas Yandika";
let userName: number = 123;
let isDead: boolean = false;

console.log(namaSaya);
console.log({namaSaya}); //dengan kurung kurawal akan ada keterangan pada terminalnya
console.log({userName});
console.log({isDead});

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
let pacarSaya: number | string | boolean; //berikan langsung tipe data nya, jika ingin diantara kedua tipe data
pacarSaya= "Susanti"; 
pacarSaya= 1;
pacarSaya = true

console.log({pacarSaya});

/**
 * Misal kasusnya array (array biasa)
 */
let istriSaya: string[]; //maka tipe data arraynya (array biasa) harus dibuat seperti ini
istriSaya = ["Siti", "Sita"]; //karena isi array nya berupa string
console.log({istriSaya});

/**
 * Array tuple type
 */
let gebetanSaya: [string, number, boolean];  //penulisannya seperti ini
gebetanSaya = ["Siti", 23, false]; 
console.log({gebetanSaya});

/** 
 * Tipe data custom
*/
type TemanType = { 
    namaTeman: string;
    isKampret: boolean;
    hutang?: number; // tanda tanya disini pertanda bahwa ini sebuah opsional
}
let temanSaya: TemanType;
temanSaya = {
    namaTeman: "Ilham",
    isKampret: true,
}
console.log({temanSaya});


/**
 * Function
 */

function penjumlahan(a : number,b : number) : void { 
    let jumlah: number = a + b
    console.log(jumlah);
}
penjumlahan(1,2);

const create = () : string => { //tipe datanya disamping parameter
    return "Terima kasih";
}
console.log(create());

/**
 * Union Type
 */
type Wanita = number;
type Pria = string
type Gender = Wanita | Pria; //maksud dari kode ini sesimpel gender bisa diisi number ataupun string
let umurAgnes: Wanita;
umurAgnes = 23;

/**
 * Interface
 */
type CoreCount = 2 | 4 | 8 | 12
type CoreName = "Dual Core" | "Quad Core" | "Octa Core" | "Hexa Core"
type Core = CoreCount | CoreName
interface IProcessor {
    brand: string,
    baseModel: string,
    modelName: string,
    coreTotal: Core,
    clockSize: number
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost: boolean;
}

const createIntel = (processor: Intel) : void => {
    console.log(`Berhasil membuat processor dengan: 
        processor: ${processor.brand} 
        base model: ${processor.baseModel}
        tipe model: ${processor.modelName} 
        kecepatan clock: ${processor.clockSize}
        total core: ${processor.coreTotal}
        turbo boost enable: ${processor.turboBoost}
        `);
}
const createAMD = (processor: AMD) : void => {
    console.log(`Berhasil membuat processor dengan: 
        processor: ${processor.brand} 
        base model: ${processor.baseModel}
        tipe model: ${processor.modelName} 
        kecepatan clock: ${processor.clockSize}
        total core: ${processor.coreTotal}
        precision boost enable: ${processor.precisionBoost}
        `);
}

const CoreI5: Intel = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11029f",
    clockSize: 4,
    coreTotal: "Octa Core",
    turboBoost: true
}
createIntel(CoreI5);

const Ryzen5: AMD = {
    brand: "AMD",
    baseModel: "ryzen 5",
    modelName: "ryzen 5-5629H",
    clockSize: 5,
    coreTotal: "Hexa Core",
    precisionBoost: true
}
createAMD(Ryzen5);