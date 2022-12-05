// const isLate = false;
// const weather = 'cold';
// if (isLate) {
//   console.log('Masukan Sarapan Ke Tas');
// } else {
//   console.log('Sarapan Dirumah');
// }

// // if (weather === 'rain') {
// //   console.log('Masukan Payung Ke Tas');

// // } else if (weather === 'cold') {
// //   console.log('Pake Jaket');
// // }

// // console.log('pergi kekantor');

// switch (weather) {
//   case 'rain':
//     console.log('Masukan Payung Ke Tas');
//     break;
//   case 'cold':
//     console.log('Pake Jaket');
//     break;
//   default:
//     console.log('Pake Kemeja');
//     break;
// }

// const maxLoop = 10;

// for (let counter = 1; counter <= maxLoop; counter++) {
//   if (counter === 5) {
//     console.log(counter + '. Hello World');
//   } else {
//     console.log(counter + '. Anjay Mabar');
//   }
// }

// let counter = 1;

// while (counter <= maxLoop) {
//   if (counter === 5) {
//     console.log(counter + '. Bumi Bulat');
//   } else {
//     console.log(console + '. Bumi Bulat');
//   }
//   counter++;
// } 

// let myJob
// myJob = "Backend Developer";
// myJob = "Doni"


// console.log(myJob);

const user = {
  nama: "Wildan Nasrulloh Reliyanto",
  umur: 20,
  negara: "Indonesia",
  "rumah singgah": "BaleEndah",
};

console.log(`Halo, Nama Saya ${user.nama}`);
console.log(`Saya Berasal Dari Negara ${user.negara}, dan umur saya ${user.umur} Tahun`);
console.log(`Dan sekarang, saya tinggal di ${user["rumah singgah"]}`);


const motor = {
  name: "Vario 125",
  manufacture: "Honda",
  maxSpeed: 125 + "cc",
  color: "Gray"
};


motor.color = "Red";
motor["maxSpeed"] = 150 + "cc";

delete motor.color;
console.log(motor);
console.log(user);

