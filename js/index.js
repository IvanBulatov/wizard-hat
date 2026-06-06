// случайное число от 0 (включительно) до 1 (невключительно)
// максимум: 0.999999999999
console.log(Math.random())


// Как задать свой максимум для рандома
// 0.999 * 10 (невключительно) = 9.99
// от 0 до 10 (невключительно) 

console.log(Math.random() * 10);


// Как получить целое число???
// Округлить.
// Округление в меньшую сторону.
// Math.floor(0.999999) = 0; Округление до "пола"

// Округление в большую сторону.
// Math.ceil(0.11111) = 1; Округление до "потолка"

// Огругление к ближайшему целому (математическое)
// Math.round(0.5) = 1
// Math.round(0.49) = 0


// Целое рандомное число
// 1 или 0 - Монетка
console.log(Math.round(Math.random()))

// Целое число с заданым максимумом 
console.log(Math.floor(Math.random() * 10))

// функция рандома с заданным максимумом 
// от 0 до max
function randomInt(max) {
    let number = Math.floor(Math.random() * max);
    return number;
}

console.log(randomInt(100000))

// функция рандома с заданным максимумом и минимумом
// от min до max
// max = 10, min = 3
// 0.999 * 10 = 9.99 + 3 = 12.99 = 12
// 0.679 * 10 = 6.79 + 3 = 9.79 = 9

// 0.999 * (10 - 3) = 6.99 + 3 = 9.99 = 9
// 0 * (10 - 3) + 3 = 3

function getRandomInt(min, max) {
    let number = Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
    return number;
}

console.log(getRandomInt(5, 15))

let hat = document.querySelector(`.hat`);
let result = document.querySelector(`.result`);


let messages = [
    `Добро пожаловать в Гриффиндор!`, // 0
    `Тебя ждёт большая удача`,
    `На обед будет что-то невкусное`,
    `Одевайся теплей`,
    `Тебя ждёт финансовое благополучие`,
    `Отлично выспишься сегодня!`,
    `Домашку всё равно придётся сделать`,
    `Кто-то сделает тебе комплимент`,
    `Выходные пройдут отлично`,
    `Шляпа устала, предсказания не будет`//9
];


hat.addEventListener(`click`, function () {
    let i = getRandomInt(0, messages.length);
    let message = messages[i];
    result.innerHTML = message;
})