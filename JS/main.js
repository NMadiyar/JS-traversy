/* При создании переменных лучше использовать let, const. В основном используют const потому что твой код
становится четким и ясным, const нельзя переназначить. Let используется только в том случае, если в твоем коде
предусмотрено перераспределение данных
 */

//String, Numbers, Boolean, null, undefined

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//Concatenation
console.log("My name is " + name + " and  i am " + age);
//Template String
// console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);


//String manipulations
const s = "technology, computers, it, code";

// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
//Substring в скобках указывается начало, после запятой конец в элементах строки
// console.log(s.substring(0,5).toUpperCase());
//Split позволяет разделять строку и помещать их в массивы, для этого нужно в скобках указать способы деления строки
// друг от друга, в данном случае была (", ") запятая, потом пробел
console.log(s.split(', '));


//Массивы - это переменные которые имеют множество значений
/*При создании массивов использовать const нормально, т.к мы не переназначаем его, а просто взаимодействуем со
значениями внутри него
 */

const fruits = ['apple', 'orange', 'pear'];

fruits[3] = 'grapes';

/*Вышеперечисленный метод добавления значений в массив является неправильным и поэтому рекомендуется использовать
 метод push, fruits.push(mangoes)*/
fruits.push('mangoes');

//Можно добавлять значения и в самое начало массива способом unshift, fruits.unshift('strawberry')
fruits.unshift('strawberry');

//Если нужно удалить последнее значения с массива используется метод .pop()
fruits.pop();

/*Для того, чтобы проверить имеется ли какое-либо значение в массиве нужно прописать данное значение
Array.isArray(в скобках пишется название массива), возвращает булевое значение*/
console.log(Array.isArray(fruits));

//Для того, чтобы узнать индекс значения в массиве необходимо прописать названиемассива.indexOf(значение в массиве)
console.log(fruits.indexOf('orange'));


console.log(fruits);

//Object literals
//Внутри объектов можно создавать еще одни объекты, так же чтобы проверить объект надо использовать console.log, а не
//alert
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music', 'movies', 'sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
//Можно указать целый console.log(person) он даст информацию по объекту, либо указать person.firstName, так же
//через запятую можно указывать
// console.log(person.firstName, person.lastName); выводит Джон Дое
// console.log(person.hobbies[1]); Получает значение мовиес из хобби
// console.log(person.address.city); Получает вложенную информацию из объекта

//Destructure, в данном случае, мы вытаскиваем значения из объекта, т.е здесь значение означает не равно, а именно вытаскивание
//определенных значений из объекта
//Для вытаскивания объекта который внутри другого объекта, надо прописать название вн объекта: { значения}
//address: { city };
const { firstName, lastName, address: { city} } = person;
console.log(city);

//Так же можно задавать дополнительные методы объекта путем person.email = "mn@gmail.com"
person.email = "madiyarnaizabekov@gmail.com";
console.log(person);



//Работа с объектами будет в основном с массивами

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    },
];
// console.log(todos[1].text); Вытаскивает text meeting

//Все это похоже на формат JSON, он показывал отдельный конвертер и указал, что в JSONe нету одинарных кавычек и
//ставится двойные кавычки в кей вордах и строках
//JSON.stringify(название того, что надо переделать в json) форматирует вложенное значение в стиль JSONa, чтобы
//отправить данные на сервер
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//For loops (циклы for)
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While loop, разница в том, что мы переменную оставляем вне цикла. Чтобы цикл не стал бесконечным, надо
//увеличивать множитель
let i = 0;
while (i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//For loop for arrays
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

/*For loop for arrays( the best way), чтобы это сделать в скобках задаем любую переменную let todo, а потом пишем
of название массива todos*/
for(let todo of todos){
    console.log(todo);
}

//forEach, map, filter новые способы цикла для массивов. High order array methods

//forEach для каждого, берется название массива.forEach(function(любое название переменной){ console.log(переменная.text)}
todos.forEach(function (todo){
    console.log(todo.text);
});

//Map цикл для массива, но он возвращает какое-то значение
const todoText = todos.map(function (todo){
    return todo.text;
    }
);
console.log(todoText);

//Filter цикл используется для массивов, чтобы выбрать определенные значения которые указаны в фильтре,
//в этом примере выбраны только те массивы,  у которых значение труе

const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted===true;
    }
).map(function (todo){
    return todo.text;
    }
);
console.log(todoCompleted);


//Conditionals, условия
//В данном примере указывается значение == означает равенство, которое игнорирует тип переменной.
//А === означает строгое равенство, должен соблюдаться и тип и значение переменной.
// const l = 10;
// const o = 4;
// if(l > 5 || o > 10){
//     console.log('l is 10');
// } else if(l > 10){
//     console.log('l is greater than 10');
// }
// else {
//     console.log('l is not 10');
// }

//Можно укоротить условие знаком вопроса, cначала пишется условие потом знак вопроса (он означает тогда), после него пишется
//значение которое работает при тру, потом пишется двоеточие(означает else)  и пишется значение которое сработает при фолс
const o = 1;
const color = o > 10 ? 'red' : 'blue';
console.log(color);

//Показывает пример использования switch case
switch (color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is white');
        break;
}

//Functions
//NaN означает not a number, такое выходит если при вызове функции не заданы параметры
//Можно задать значения по умолчанию в самой функции, допустим здесь указано как function (num1 = 1, num2 = 1)
//т.е если вызвать такую функцию, он нам даст ответ 2, но если вызвать эту функцию AddNums(5,5) с такими параметрами
//то он перезапишет стандартные параметры в самой функции и даст ответ 10
//Обычно функция возвращает какое-то значение
// function AddNums(num1 =1, num2 = 1){
//    return num1 + num2;
// }
// console.log(AddNums(5, 5));

//Arrow function было добавлено в новых версиях программирования ES6, чтобы это сделать надо писать не функция, а задать
//новую переменную const A = num1, после знака равно пишется параметры функции, потом => (fat arrow) после которого
//идут какие-либо вычисления
//Если у вас в решении функции только одно значение, можно убрать фигурные скобки и слово ретурн, т.к он в любом случае
//возвращает то значение
//Если у вас один параметр, то можно не вкладывать его в скобки
const addNums = num1 => num1 + 5;

console.log(addNums(5));
const numbers = (numb1, numb2, numb3) => {
    const umn = numb1 * numb2 * numb3;
     return umn / 5;
}
console.log(numbers(5,5,5));

todos.forEach((todo)=>console.log(todo.text));

arrt = [1, 2, 3, 4];
arrt.forEach(function (arrte){
    console.log(arrte +1);
})
arrt.forEach((arrtes) => console.log(arrtes +1));


//OOP, Constructive function
//Constructive function начинается всегда с большой буквы
//dob был указан как строка, но можно указать как дату, new date(dob); при указывании такого типа, можно будет работать
//с методами даты, dob.getFullYear;
//Внутри можно задать свой собственный метод this.ИмяМетода = function() { return...}, но так лучше не делать, а
//добавлять их отдельно в Person.prototype.ИмяМетода = function() { return...} и в консоле у тебя не будет захламляться
//данные в объекте, а пойдут во вкладку proto

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function (){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }
//
// Person.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`;
// }

//Class это было добавлено в ES6, делает тоже самое что и на верху, но более легко писать код и позволяет людям из
//других языков кодирования понимать язык

class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

//Instantiate object
const person1 = new Person('John', 'Doe', '02-08-1993');
const person2 = new Person('Mary', 'Smith', '03-05-1973');
console.log(person1);
console.log(person1.getFullName());
console.log(person2.getBirthYear());


//DOM - document object model
//window является самым главным родительским элементом
// console.log(window);
// window.alert(1);

//Single element selectors
const form = document.getElementById('my-form');
console.log(form);
//querySelector выбирает один элемент, это может быть не только айди, но и классы и теги, для выбора класса используется
//точка и выбирается только одиночный элемент, для айди #
console.log(document.querySelector('#my-form'));

//Multiple element selectors
//querySelectorAll(название класса .класс) выбирает множество вариантов и возвращает NodeList что является в свою
//очередь массивом, к которым можно применить методы массива. Данный метод является рекомендуемым
console.log(document.querySelectorAll('.item'));
//Другой метод является устаревшим и может брать только классы, так же возвращает HTMLCollection который НЕ является
//массивом и его нужно отдельно конвертировать в массив
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const item = document.querySelectorAll('.item');
item.forEach((item)=>console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove(); удаляет полностью класс items
// // ul.lastElementChild.remove(); удаляет последний элемент в классе items
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerHTML = 'John';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// //Взяли класс кнопки и дали ему стиль через style
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//addEventListener добавляет событие которые будет происходить, addEventListener(название события 'click', функция
//которая будет происходит при событии
//Есть такие события как click, mouseover (при наведении мышкой), mouseout(навел и отвел мышку)
//т.к кнопка submit отправляет данные, чтобы работало это значение, необходимо отменить действие по умолчанию,
// т.е отменить отправление данных названиепараметра.preventDefault()

//При вызове самого параметра ивента, выходят разные значения, чтобы вытащить стандартное значение используется
//названиеПараметра.target.className, .target.id  и тд

//Через .classlist.add('название класса') можно применять различные классы
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//   // console.log(e.target.className);
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<i>HELLO</i>';
// });

//Tiny application
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
//Cоздаем функцию, в ней прописываем такие значения как, вместо алерта есть пустой див с классом msg, туда прописываем
//значения если If работает или нет, так же можно ему добавить заранее подготовленный класс в КСС через classlist.add
//потом указать setTimeout(функция, время таймаута указывается в мс)
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value === ''){
        msg.innerHTML = 'Please enter the values';
        msg.classList.add('error');
        setTimeout(() => msg.remove(),3000);
    } else {
        const tli = document.createElement('li');
        tli.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(tli);

    //    clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
