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
 * Menit 24:00
*/