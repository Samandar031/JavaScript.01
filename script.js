// Exercise - 1

// 1 - topshiriq

// let vazn = prompt("vazningizni kiriting ?");
// let boy = prompt("bo'yingizni kiriting");
// let moslik = vazn / boy ** 2;

// if (moslik > 18.5) {
//   console.log("juda ozg'insan semirishing kerak");
// } else if (moslik < 25) {
//   console.log("Narmalniysan");
// } else if (moslik < 30) {
//   console.log("semizsan");
// } else if (moslik < 35) {
//   console.log("kattasan");
// } else if (moslik > 35) {
//   console.log("juda bahaybatsan");
// }

// 2 - topshiriq

// let vazn = prompt("Mamur:vazningizni kiriting ?");
// let boy = prompt("Mamur:bo'yingizni kiriting");
// let vaznA = prompt("Azizullo:vazningizni kiriting ?");
// let boyA = prompt("Azizullo:bo'yingizni kiriting");

// let moslik = vazn / boy ** 2;
// let moslikA = vaznA / boyA ** 2;

// if (moslik > moslikA) {
//   console.log("Mamur kotta ekan");
// } else if (moslik < moslikA) {
//   console.log("Azizullo og'ir ekan");
// }

// Exercise - 2

// 1 - topshiriq

// let son = prompt("son kiriting");

// if (son % 2 == 1) {
//   console.log(` . Kiruvchi malumot: ${son}

//   Chiquvchi malumot  Siz toq son kiritingiz. ${son} toq son. `);
// } else if (son % 2 == 0) {
//   console.log(` . Kiruvchi malumot: ${son}

//   Chiquvchi malumot  Siz juft son kiritingiz. ${son} juft son. `);
// }

// Exercise - 3

// 1 - topshiriq

// let delfin1 = Number(prompt("delfin1 birni kititing:"));
// let delfin2 = Number(prompt("delfin2 birni kititing:"));
// let delfin3 = Number(prompt("delfin3 birni kititing:"));

// let koala1 = Number(prompt("koala1 birni kititing:"));
// let koala2 = Number(prompt("koala2 birni kititing:"));
// let koala3 = Number(prompt("koala3 birni kititing:"));

// let orta = function (de1, de2, de3) {
//   return (de1 + de2 + de3) / 3;
// };

// let delfin = orta(delfin1, delfin2, delfin3);
// let koala = orta(koala1, koala2, koala3);

// if(delfin > koala) {
//   console.log(`delfinlar g'olib ekan`);
// }
// else if (delfin < koala) {
//   console.log(`koalalar g'olib ekan`);
// }
// else if (delfin = koala) {
//   console.log(`natija durrang`);
// }

// console.log(delfin, koala);

// if (delfin > koala);

// 2 - topshiriq

// let login = prompt(`loginni kiriting`);
// let parol = prompt(`parolni kiriting`);

// console.log(`tabriklaymiz siz tizimdan muvafaqqiyatli o'tdingiz`);

// Exercise - 4

// 1 - topshiriq 7.5 45

// let shot = prompt(`hisobingizni kiriting`);

// let usluga = (shot * 15) /100;
// if (usluga < 7.5) {
//   let yigirma = (shot * 20) / 100;
//   console.log(` ${yigirma}   20 % hisobladik `)
// }
//  else if (usluga > 45) {
//   let yigirma = (shot * 20) / 100;
//   console.log(` ${yigirma}   20 % hisobladik `)
// }
// else if (usluga < 45 && usluga > 7.5) {
//   console.log( `${usluga} 15% hisobladik ${shot} obshiy summa` )
// }

//  2 - topshiriq

// let yosh = prompt(`yoshingizni kiriting`);

// let kun = yosh * 365;
// let soat = kun * 24;
// let min = soat * 60;
// let sec = min * 60;

// console.log(`${kun} kun ${soat} soat ${min} min ${sec} sekund`);

// Exercise - 5

// 1 - topshiriq

// 2 - topshiriq

let son1 = prompt(`son kiriting`);
let son2 = prompt(`2 - son kiriting`);
let opera = prompt(`operatorni kiriting`);

switch (opera) {
  case "*":
    let kop = son1 * son2;
    console.log(`kop kopaytirdik`);
    break;
  case "/":
    let bol = son1 / son2;
    console.log(`bo'ldik`);
    break;
  case " +":
    let qosh = son1 + son2;
    console.log(`qo'shdik`);
    break;
  case "-":
    let ayi = son1 - son2;
    console.log(`ayirdik`);
    break;
}

// exercise - 6

// 1-topshiriq

// let first = prompt("birinchi sonni kiriting");
// let secont = prompt("ikkinchi sonni kiriting");
// let third = prompt("Uchinchi sonni kiriting");

// if (first > secont && first > third) {
//   console.log(`Eng katta son: ${first}`);
// } else if (secont > first && secont > third) {
//   console.log(`Eng katta son: ${secont}`);
// } else if (third > first && third > secont) {
//   console.log(`Eng katta son: ${third}`);
// } else {
//   console.log(`Eng katta son mavjud emas`);
// }

// 2-topshiriq

// const frinends = ["Mamur", "Samandar", "Bekzod"];
// console.log(frinends);
// frinends.push("Aziz");
// console.log(frinends);

// let about = {
//   frinends: ["Mamur", "Samandar", "Bekzod", "birinchi", ["kalla"]],
//   job: "developer",
//   age: 24,
//   university: "tatu",
// };

// console.log(about.frinends[3][1], about.age);

// const aboutMe = {
//   age: 2001,
//   name: "Samandar",
//   now: 2022,
//   calcAge: function () {

//     let calcNow: function() {
//       return this.now + this.age
//     }
//   },
// };

// function funkToq() {
//   for (let i = 1; i < 100; i = i + 2) {
//     console.log(i);
//   }
// }

// function funkJuft() {
//   for (let i = 2; i < 100; i = i + 2) {
//     console.log(i);
//   }
// }

// let birth = [1996, 2000, 2001, 2002];
// let age = [];

// let calcAge = function () {
//   for (let i = 0; i < birth.length; i++) {
//     age.push(2022 - birth[i]);
//   }
// };

// calcAge();
// console.log(age);

// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

// const arr = ["umid", "rustamov", "developer", 25, "toshkent", 10000];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") {
//     continue;
//   }
//   console.log(arr[i]);
// }

// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
// let incre = 4;
// for (let i = 1; i < 8; i++) {
//   console.log(`${i}-kun`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`${j}-mashqni bajar`);
//   }
// }

// let week = [
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba",
//   "yakshanba",
// ];
// let week1 = 2;

// for (let i = 0; i < week.length; i++) {
//   //dushanba
//   console.log(`${week[i]}-kuni`);
//   for (j = 1; j < week1; j++) {
//     console.log(`${j}-para`);
//   }
//   week1++;
// }

// let soqqa = Math.trunc(Math.random() * 100) + 1;
// if (soqqa === 6) {
//   console.log("");
// }
// soqqa = Math.trunc(Math.random() * 10) + 1;

// while (soqqa !== 4) {
//   console.log(`${soqqa} chiqdi. Yutdingiz`);

//   soqqa = Math.trunc(Math.random() * 10) + 1;
// }

// console.log(`siz yutdingiz: ${soqqa}`);

// soqqa = Math.trunc(Math.random() * 10) + 1;

// while (!(soqqa > 5 && soqqa % 2 == 0)) {
//   console.log(`siz yutdingiz: ${soqqa}`);
//   soqqa = Math.trunc(Math.random() * 10) + 1;
// }

// console.log(`siz yutdingiz: ${soqqa}`);

// let i = 0;

// while (true) {
//   console.log(i);
//   if (i === 10) {
//     break;
//   }
//   i++;
// }

// let son = prompt(`son kiriting`);

// if(son % 2 == 1) {
//   console.log(`bu son toq son`)
// }
// else if (son % 2 == 0) {
//   console.log(`bu son juft son`)
// }
