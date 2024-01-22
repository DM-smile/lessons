"use strict";
// ========================= //

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас
// рішення:

const bodyElement = document.querySelector('body')
function createButton(number = 0) {
   for (let i = 0; i < number; i++) {
      const newButton = document.createElement('button')
      newButton.classList.add('item')
      newButton.innerText = 'BUTTON'
      bodyElement.prepend(newButton)
      newButton.style.cssText =
         'font-size: 80px; cursor: pointer;'
   }
   document.addEventListener("click", documentAction)
   function documentAction(e) {
      const targetElement = e.target
      if (targetElement.closest(".item")) {
         targetElement.classList.toggle('active')
      }
   }
}
createButton(3)

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
// рішення:

window.addEventListener("load", pageloaded)
function pageloaded(e) {
   bodyElement.classList.add("loaded")
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
// рішення:

const headerElement = document.querySelector(".header")
const footerElement = document.querySelector(".footer")
const GREEN_BACKGROUND = "green"
const YELLOW_BACKGROUND = "yellow"
headerElement.addEventListener("mouseenter", () => footerElement.style.backgroundColor = YELLOW_BACKGROUND)
headerElement.addEventListener("mouseleave", () => footerElement.style.backgroundColor = GREEN_BACKGROUND)

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
// рішення:

// ! щоб не пересікалися класи з першим завданням, зробив клас "item-new"
const itemNew = document.querySelector(".item-new")
//затримка
let delay = parseInt(itemNew.getAttribute("data-delay")) //інтервал
let maxNumber = parseInt(itemNew.getAttribute("data-max-number")) //максимальне значення
let numberText = itemNew.textContent
let timerWork = true //змінна для перевірки чи запукався таймер раніше

// функція таймеру
function startTimer() {
   let currentNumber = 1;
   const intervalId = setInterval(() => {
      itemNew.textContent = currentNumber;
      if (currentNumber < maxNumber) {
         currentNumber++; //+1
      } else if (currentNumber === maxNumber) {
         clearInterval(intervalId); //стоп
      } else {
         console.log("щось пішло не так :(")
      }
   }, delay);
}

// функція появи елементу з таймером в в'юпорті
let options = {
   root: null,
   rootMargin: "0px 0px 0px 0px",
   threshold: 0.9,
};
let callback = (entries, observer) => {
   entries.forEach((entry) => {
      const targetElement = entry.target;
      
      if (entry.isIntersecting) {
         //запуск таймеру
         if (timerWork) {
            //перевирка та запуск
            startTimer()
            timerWork = false //присвоюємо значення для запобігання повторного запуску
         } else {
            console.log("перезапуск таймеру заблоковано")
         }
      }
   });
};
let observer = new IntersectionObserver(callback, options);
observer.observe(itemNew);