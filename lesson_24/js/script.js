"use strict";
// // ===========
// let userAge;
// userAge = 31;
// let userName;
// userName = "Dmytro";
// let work;
// work = "Freelanser";
// let userAgeNew;
// userAgeNew = ++userAge;
// console.log(
//    "Hello, i'm " +
//       userName +
//       " my age" +
//       " " +
//       userAgeNew +
//       " years" +
//       ", i am " +
//       work +
//       " =)"
// );
// ============================== //
// ======||===homework===||====== //
// ============================== //

// Задача №1
// Що потрапить в консоль?
console.log(`================ консоль задачки: ================`);
let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar);
}

// рішення задачі №1:
// в консоль попаде "1"
// пояснення:
// 1) об'ява змінної "someVar" зі значенням "0";
// 2) значення "0" - бінарний тип даних boolean = "false";
// 3) інкремент "++" збильшує значення змінної "someVar" на 1, (отримуємо значення цієї зминної "1");
// 4) "if (someVar)" = якщо змінна "someVar" є "true" то виводимо в консоль її значення;
// 5) 1 (одиниця) - є бінарним значенням "true", виводимо її в консоль.

// ============================== //
// ============================== //

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

// рішення задачі №2:
console.log(`================ консоль задачки: ================`); //це щоб зручнише розділяти задачі

for (let i = 1; i < 11; i++) {
   console.log("Пункт №" + i);
}
// пояснення:
// 1) "for" - об'являємо цикл;
// 2) () - відкриваємо дужки для створення скороченого запису команди;
// 3) "let i = 1" - об'ява змінної "і" та присвоєння значення "1"
// 4) "i < 11" - задаємо умову циклу "повторювати якщо кількість повторів даного циклу була менше 11-ти";
// 5) "i++" - додаємо +1 до числа, яке є значенням змінної, в цикл при кожному повторі;
// 6) console.log("Пункт №" + i) - додаємо підпис пункту "Пункт №" та запускаємо результат циклу в консоль;
// 7) отримуємо результат повтору циклу "Пункт №1", "Пункт №2"...... закінчуємо на "Пункт №10".

// ============================== //
// ============================== //

// Задача №3
// Що потрапить в консоль ?
if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
   console.log("000");
}

// рішення задачі №3:
// в консоль нічого не потрапило!
// пояснення:
// 1) маємо умову: якщо (2 * 20 <= 10), або (30 / 2 < 5 && 10 <= "10"), або (20 === "20") має значення "true" то виводимо в консоль "000";
// 2) обчислюємо (2 * 20 <= 10);
// 3) (40 <= 10) - "40 менше або дорівнює 10" - отримуємо "false";
// 4) обчислюємо (30 / 2 < 5 && 10 <= "10");
// 5) (15 < 5 && 10 <= "10") - перше та друге значення повинні бути "true", інакше отримуємо "false";
// 6) (false && true) - перше значення: 15 не є менше за 5, повертає "false";
// 7) друге значення: "10" завдяки оператору "менше або дорівнює" отримує тип даних "число" та отримуємо 10 <= 10 (повертає "true");
// 8) оператор "&&" повертає "true" при умові якщо два опернда відповідають обчисленню (тобто "true"), в нашому випадку перший - "false", результат - "false";
// 9) обчислюємо (20 === "20");
// 10) оператор "===" є соворим оператором порівняння, тобто не переводить рядок в число;
// 11) число "10" не дорівнює рядку "10" - отримуємо "false";
// 12) кінцевий результат (false || false || false);
// 13) console.log('000') - умова не выконана, нічого в консоль не виводимо.

// ============================== //
// ============================== //

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// рішення задачі №4:

console.log(`================ консоль задачки: ================`);

let a = +(0); //   <== введи перше число в дужки
let b = +(""); //   <== введи друге число в дужки
function calcDel(a = 0, b = 0) {
   return a / b;
}
let result = calcDel(a, b);
if ((a == 0 && b == 0) || typeof a == "null" || typeof b == "null") {
   console.log(
      `Введи в значення змінних "a" та "b" (в дужках) ЧИСЛА для ділення!`
   );
} else if (a !== 0 && b == 0) {
   console.log(`Я ж тобі не Чак Норіс щоб на нуль ділити =)`);
} else if (typeof a === "number" && typeof b === "number") {
   console.log(`Ділимо число ${a} на число ${b}:`);
   console.log(`Результат ділення: ${result}!`);
}

// пояснення задачі №4:
// 1) створення змінних a та b для калькуляції;
// 2) створення функції alcDel яка ділить значення змінної a на хначення змінної b;
// 3) створення змінної result та присвоєння для передачі значень в функцію;
// 4) умови для обчислень.
// P.S. можливо щось лишака понаписував) або щось десь не логічно (наприклад дужки в змінних a та b)
// це для того щоб рядки в числа переводити)
// багато експерементував і можливо лишаків понаробив) сильно не сваріться))

// ============================== //
// ============================== //

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

// рішення задачі №5:
console.log(`================ консоль задачки: ================`);

let someArray = [999, 32, 11, 5643, 10];
someArray.forEach((value) => {
   console.log(`шукаємо елемент масиву "${10}"`);
   console.log(value);
   if (value !== 10) {
      console.log(`цей елемент не є "10" =(`);
   } else {
      console.log(`о, знайшлася "${10}" =)`);
   }
});

// пояснення задачі №5:

// 1) створення змінної з масивами;
// 2) створення методу перебору масиву;
// 3) задаємо параметри перебору масиву з пошуком потрібного елементу масиву.

// ============================== //
// ============================== //

console.log(`========== дякую за перевірку домашки =) ==========`);
