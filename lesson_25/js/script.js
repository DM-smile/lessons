"use strict";
// ========================= //

// let promptAnswer = prompt("Привіт! Як тебе звати?");
// if (promptAnswer === null) {
//    console.log("відмова");
// } else if (promptAnswer === "") {
//    console.log("мовчанка");
// } else {
//    console.log(`приємно познайомитись, ${promptAnswer}`);
// }

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const bodyElement = document.body;
// console.log(bodyElement);
// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

// const bodyElement = document.body
// const childNodes = bodyElement.children
// console.log(childNodes)
// for (let i = 0; i < childNodes.length; ++i) {
//    console.log(childNotes[i])
// }

// const bodyElement = document.body
// const childNodes = bodyElement.children
// console.log(childNodes)
// for (let childNode of childNodes) {
//    console.log(childNode)
// }

// const bodyElement = document.body
// const previousSibling = bodyElement.previousElementSibling
// console.log(previousSibling)

// const headElement = document.head
// const nextSibling = headElement.nextElementSibling
// console.log(nextSibling)

// const liElement = document.querySelector('li')
// console.log(liElement)

// const liElements = document.querySelectorAll('li')
// console.log(liElements)

// if (liElements.length) {
//    liElements.forEach((item, index) => {
//       console.log(item)
//    })
// }

// const block = document.querySelectorAll('.block, .item')
// console.log(block)
// if (block.length) {
//    console.log(`присутні`)
// } else {
//    console.log('відсутні')
// }
// const someElement = document.querySelector(`.block`)
// const parentElement = someElement.parentElement
// console.log(parentElement)
// console.log(`знайдено батьківський об'єкт - ${parentElement}`)

// const listItems = document.querySelectorAll('li')
// listItems.forEach(listItem => {
//    listItem.innerHTML = '<span>hi!</span>'
// })

// const listItems = document.querySelectorAll('li')
// listItems.forEach(listItem => {
//    listItem.textContent = '<span>hi!</span>'
// })

// let newObject = document.createElement('div')
// console.log(newObject)
// newObject.innerHTML = "<span>hi!</span>"
// console.log(newObject)
// const wrapper = document.querySelector(".wrapper")
// wrapper.before(newObject)
// wrapper.after(newObject)
// wrapper.prepend(newObject)
// wrapper.append(newObject)

// const wrapper = document.querySelector(".wrapper")
// wrapper.insertAdjacentHTML("afterbegin", `
//    <div class="section">
//       <ul class="section__list">
//          <li class="section__item"></li>
//          <li class="section__item"></li>
//          <li class="section__item"></li>
//          <li class="section__item"></li>
//       </ul>
//    </div>
// `)

// ========================= //

// Задача №1
// Отримати в константу елемент <body>
// рішення:

const bodyElement = document.body;

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
// рішення:

function createList(liItems = 1) {
   const list = document.createElement("ul");
   bodyElement.insertAdjacentElement("afterbegin", list);
   for (let i = 1; i <= liItems; i++) {
      const listElements = document.createElement("li");
      list.insertAdjacentElement("beforeend", listElements);
   }
}
createList(5);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
// рішення:

bodyElement.classList.add("loaded");
let colorGreen = `green`;
if (bodyElement.classList.contains("loaded")) {
   console.log("крас присутній, фарбуємо текст");
   bodyElement.style.color = colorGreen;
} else {
   console.log("клас loaded відсутній");
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
// рішення:

const itemClass = document.querySelectorAll(".item");
console.log(itemClass);
itemClass.forEach((thisItem, index) => {
   // console.log(value)
   // console.log(index)
   thisItem.classList.add("active");
   thisItem.textContent = `Елемент № ${index + 1}`;
});

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
// рішення:

const button = document.querySelector(".button");
const text = document.querySelector(".text");
button.setAttribute("href", "index.html");
button.setAttribute("title", "click me!");
text.style.marginBottom = `40px`;
button.style.cursor = `pointer`;
button.style.fontSize = `40px`;
button.style.backgroundColor = `grey`;
button.style.borderRadius = `10px`;
button.style.padding = `10px 50px`;
button.style.textDecoration = `none`;
button.scrollIntoView({
   behavior: "smooth",
});

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
// рішення:

let linkItem = document.querySelector(".link");
console.log(linkItem);
linkItem.setAttribute("data-link", "100");
let dataLink = linkItem.getAttribute("data-link");
console.log(dataLink);
if (parseInt(dataLink) < 200) {
   linkItem.style.color = "red";
   linkItem.innerHTML = "red text";
} else if (parseInt(dataLink) > 200) {
   linkItem.style.color = "green";
   linkItem.innerHTML = "green text";
} else{
   linkItem.style.color = "blue";
   linkItem.innerHTML = "blue text";
}
