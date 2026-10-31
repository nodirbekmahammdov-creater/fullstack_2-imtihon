// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ᔍ 6
// // 1 + 2 + 3 = 6
// namuna(10) ᔍ 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ᔍ 28
// // 1 + 2 + 3 + ... + 7 = 28



// function rangeSum(num){
//     let sum = 0 
//     for(let i = 1;i<=num;i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(rangeSum(3));
// console.log(rangeSum(10));


// ======================================================================================



// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false


// function Namuna(son,obj){
//     return son>=obj.min && son <= obj.max;
// }


// console.log(Namuna(4, { min: 0, max: 5 }));
// console.log(Namuna(4, { min: 4, max: 5 }));
// console.log(Namuna(4, { min: 6, max: 10 }));


// ============================================================================================


// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ᔍ true
// Namuna(3) ᔍ false
// // 3^2 = 9
// Namuna(6) ᔍ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ᔍ false
// // 95^2 = 9025 (does not end with 95)

// function Namuna(son) {
//     let a = Math.pow(son, 2);

//     if (a % Math.pow(10, son.toString().length) == son) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(Namuna(76));
 
// ==============================================================================


// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]



// function Namuna(arr){
//     let newarr = []
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]+i)

//     }
//     return newarr

// }


// console.log(Namuna([0, 0, 0, 0, 0]));
// console.log(Namuna([1, 2, 3, 4, 5]));


// =============================================================================
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta
// Namuna:


// function Namuna(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "cola" && arr[i] !== "fanta") {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// console.log(Namuna(["fanta", "cola", "water"]));
// console.log(Namuna(["fanta", "cola"]));
// console.log(Namuna(["lemonade", "beer", "water"]));


// ============================================================================
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ᔍ 3
// Namuna(56) ᔍ 2
// Namuna(7154) ᔍ 4
// Namuna(61217311514) ᔍ 11
// Namuna(0) ᔍ 1


// function Namuna(son) {
//     return String(son).length;
// }
// console.log(Namuna(123));
// console.log(Namuna(2356));



// function Namuna(son) {
//     let count = 0;

//     for (let i = son; i > 0; i = Math.floor(i / 10)) {
//         count++;
//     }

//     return son === 0 ? 1 : count;
// }

// console.log(Namuna(123));         
// console.log(Namuna(56));          
// console.log(Namuna(7154));        
// console.log(Namuna(61217311514)); 
// console.log(Namuna(0));           

// ================================================================
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.


// function Namuna(son) {
//     return Number(String(son).split("").sort().reverse().join(""));
// }

// console.log(Namuna(123));  
// console.log(Namuna("001")); 
// console.log(Namuna(999));  


// ===========================================================================
// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// function Namuna(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(Namuna(1, 10));
// console.log(Namuna(5, 20));
// console.log(Namuna(50, 100));
// ===========================================================================================
// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ᔍ true
// Namuna(1652) ᔍ false


// function Namuna(son) {
//     let str = String(son);
//     let sum = 0;

//     for (let i = 0; i < str.length; i++) {
//         sum += Math.pow(Number(str[i]), str.length);
//     }

//     return sum === son;
// }

// console.log(Namuna(153));
// console.log(Namuna(370));
// console.log(Namuna(1652));



// ==========================================================================
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwB

// function Namuna(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(Namuna("fvLzpxmgXSDrobbgMVrc"));
// console.log(Namuna("JMZWCneOTFLWYwB"));