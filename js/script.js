// alert('Hello world');
/*
document.write('Hello world!');
console.log('John Doe');

/*
    DATA TYPES
    number (int, float, NaN, Infinity) => 0-9, -, +, . and e  
    string
    boolean
    null -
    undefined -
    array - []
    objects - {}

    scope
    var - local scope
    let - global 

    typeof(variable)
*/
/*
let nameOfVariable; //declaration 

let myName, age, isMarried, address, occupation, skillSet;

myName = 'Mayowa';
age = 17;
isMarried = true;
address  = '4 Oyetubo street, Ikeja';
occupation = 'Student';
skillSet = ['html', 'css', 'bootstrap', 'Python', 'Django']

let aboutMe;
aboutMe = 'My name is ' +
    myName +
    ' and I am ' + 
    age + 
    ' years old. ' +
    ' I am a ' + 
    occupation + 
    ' and I live at ' + 
    address ;
console.log(aboutMe)

aboutMe = `My name is ${myName}, I am ${age} years old. I am a ${occupation} and I live at ${address}` ;

console.log(aboutMe)


const nameOfPupils = ['Olu', 'Bola', 'Sola', 'David'];
nameOfPupils[4]='Ayo';
let lastPupil = nameOfPupils[nameOfPupils.length - 1];

console.log(nameOfPupils);


const nameOfGirls = ['Ayo', 'Mayowa', 'Wunmi'];
const nameOfBoys = ['Sola', 'Busayo', 'Tayo'];

const nameOfChildren = [...nameOfGirls, ...nameOfBoys];
console.log(nameOfChildren);

const children = ['Ayo', 'Sola', 'Busayo', 'Tayo', 'Mayowa'];
const [first, second, third, fourth, last] = children;

console.log(last);

const student={
    name: 'John',
    age: 25,
    department: 'Computer science'
    }
    console.log(typeof(student))

let school = "    This is our training centre   ";
console.log(school.startsWith('is'));
console.log(school.endsWith('centre'));
console.log(school.indexOf('our'));
console.log(school.lastIndexOf('training'));

console.log(school.substring(3,15));
console.log(school.slice(3,15));

let val = school.replace('training', 'learning');
console.log(val);

console.log(school.trim());

let character = school.charAt(10);
console.log(character);

console.log(school.toUpperCase());
*/

// NUMBERS

/*let pi = 3.142;
console.log(pi.toFixed(1));

console.log(parseInt('10.34'));
console.log(Math.round(pi));
console.log(Math.ceil(pi));
console.log(Math.floor(pi));

console.log(Math.random());
console.log(Math.min(1, 45, 78, 0.3, 98));


// ARRAYS

const nameOfPupils = ['Olu', 'Bola', 'Sola', 'David'];
nameOfPupils.push('Tolu');
nameOfPupils.pop();
nameOfPupils.shift();
nameOfPupils.unshift('Daniel')
nameOfPupils.sort();
console.log(nameOfPupils);
console.log(nameOfPupils[0]);


const fruits = [];

fruits.push('Orange', 'Mango', 'Apple', 'Pear', 'Cherry', 'Pineapple');
fruits.sort()

console.log(fruits);
console.log(fruits.length)

let x = 81;
console.log(Math.sqrt(x));

let sentence = 'Paris Hilton went drinking in Paris';

console.log(sentence.lastIndexOf('Paris'));


//LOOP

// 

for(let i = 0; i <= 5; i++){
    console.log(`Number : ${i}`);
};


let numbers = 'My name is Lanre';

for (let i = 0; i < numbers.length; i++){
    if(i==5){
        break;
    };
    console.log(i)
};

for(let i = 0; i < 10; i++){
    if(i == 2){
    console.log('The Number is: 2');
    continue;
    }
    else{
    console.log(`Number: ${i}`);
    }
};        
*/

// let x = 3, i = 1;

// while(i <= 12){
//     mul = x * i;
//     console.log(`${x} x ${i} = ${mul}`);
//     i += 1;
// };

// let x = 1;

// for(let i = 1; i <= 12; i++){
//     mul = x * i ;
//     console.log(`${x} x ${i} = ${mul}`);
// };

// for(let num = 1; num <= 10; num++){
//     if(num % 2 == 0){
//         console.log(`${num}: This is an even number`);
//         continue;
//     }
//     else{
//         console.log(`${num}: This is an odd number`)
//     };
// };


/*const students = ["Olu", "Emeka", "Adamu", "Osas", "Shade", "Ada", "Aminat", "Adesuwa"]
const findStudent = students.find(function(item){
    return item == 'Emeka'
})
for(let i=0; i <= students.length; i++){
    
    if(i == 2){
        console.log(`This is ${students[2]}`)
        continue
    }
    else{
        console.log(`The number of students in the array is ${i}`)
    }
    
};
console.log(findStudent);
*/


// const names = ['David', 'Taiwo', 'May'];
// for(const name of names){
//     console.log(name);
// }

// const students = ["Olu", "Emeka", "Adamu", "Osas", "Shade", "Ada", "Aminat", "Adesuwa"]
// const filterStudent = students.filter(function(item){
// return item === "Olu";
// })
// console.log(filterStudent);


// const students = ["Olu", "Emeka", "Adamu", "Osas", "Shade", "Ada", "Aminat", "Adesuwa"]
// const mapStudents = students.map(function(item, index){
// return item;
// })
// console.log(mapStudents);


/*
function people(name, age){
    console.log(`Hello, my name is ${name}, I am ${age} years old `)
}

people('Mayowa', 12);

const areaOfTriangle = (base, height) => {
    return(0.5 * base * height)
}

let problem = areaOfTriangle(20, 450);
console.log(problem);

function sumOfNumbers(num1, num2){
    let sum = num1 + num2;
    return(sum)
}

let problem2 = sumOfNumbers(24, 56);
console.log(problem2)

const salary = function(name, amount){
    return(`${name}:${amount}`)
}

console.log(salary('Tolu', 200000))

const add = function(number1, number2){
    let addition;
    addition = number1 + number2;
    return(addition)
}
console.log(add(34, 67));
console.log(add(98, 67));
console.log(add(34, 50));

const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100 
}

let problem3 = simpleInterest(300000, 15, 3)
console.log(problem3)
*/

// let multiplicationTable = (num, start, end) => {
//     for(start = start; start <= end; start++){
//         let total;
//         total = num * start;
//         console.log(`${num} x ${start} = ${total}`);    
//     }
// }
// multiplicationTable(2,2,12);



// let num = 2, start = 5, end = 20;
// for(start = start; start <= end; start++){
//     let total;
//     total = num * start;
//     console.log(`${num} x ${start} = ${total}`);
// }

// const multiplyNumbers = (num1, num2) => {
//     return(num1 * num2)
// }

// console.log(multiplyNumbers(3, 4))


// let age = 18;

// if(age >= 18){
//     console.log('You are eligible to vote')
// }
// else if(age == 17){
//     console.log('Try next year');
// }
// else{
//     console.log('Sorry, you are not eligible to vote')
// }

// age >= 18 ? alert('Hurray, you are eligible to vote') : alert('Sorry, you are not eligible to vote');

// const students = ["Olu", "Emeka", "Adamu", "Osas", "Shade", "Ada", "Aminat", "Adesuwa"]
// const filterStudent = students.filter(function(item){
// return item === "Olu";
// })
// console.log(filterStudent);

/* LOOP
start increment stop

*/

// multiplicationTable = {
//     oneTable : function(){
//         for(let i = 1; i < 13; i++){
//             document.write(`1 x ${i} = ${1 * i} <br/>`);
//         };
//     },
//     twoTable : function(){
//         for(let j = 2; j < 13; j++){
//             document.write(`2 x ${j} = ${2 * j} <br/>`);
//         };
//     }
// }   

// multiplicationTable.oneTable()
// multiplicationTable.twoTable()


// multiplication = {
//     table : (multiplier, stop) => {
//         for(let index = 1; index <= stop; index++){
//             document.write(`${multiplier} x ${index} = ${multiplier * index} <br/>`);
//         }
//     }
// }

// multiplication.table(7, 50)



// const students = ["Olu", "Emeka", "Adamu", "Osas", "Shade", "Ada", "Aminat", "Adesuwa"]
// const filterStudent = students.filter(function(item){
// return item.charAt(0) === 'O' || item.charAt(0) === 'A';  
// })
// console.log(filterStudent)



// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     age(){
//         let date = new Date();
//         return date.getFullYear() - this.year
//     }
// }

// class Person extends Car{
    
// }

// let myCar1 = new Car('Toyota-Prado', 2014);
// let myCar2 = new Car('Honda', 2016);
// console.log(myCar1.age());
// let person1 = new Person('Ford', 2008)
// console.log(person1.age());


// let Person = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 46,
//     greet : function(){
//         console.log(`Hello ${this.firstName}`)
//     }

// }
// console.log(Person.firstName)

// Person.eyeColor = 'green';
// Person.greet()


// const department = [
//     student = {
//         firstName : 'Samuel',
//         lastName : 'Ogunde',
//         age : 19,
//         matricNo : '19N02/034',
//         yearOfAdmission : 2019, 
//         yearsLeft : function(){
//             let date = new Date();
//             // let totalNumberOfYears = this.yearOfAdmission + 4;
//             // return (`The number of years left for ${this.firstName} is ${totalNumberOfYears - date.getFullYear()}`) 
//             return date.getMilliseconds()
//         }
//     },
//     teacher = {
//         lastName : 'Ojo',
//         firstName : 'Gabriel',
//         age : 43,
//         yearOfEmployment : 2020,
//     },
//     HOD = {
//         lastName : 'Ayeni',
//         firstName : 'Alabi',
//         age : 64,
//         yearOfEmployment : 2009,
//     }
// ]

// department[1].position = 'Junior Staff'
// console.log(department[1].position)

// delete department[1].position
// console.log(department[1])

// console.log(department[0].yearsLeft());

// let myDiv = document.getElementById('content');
// console.log(myDiv);

// let myCollection = document.getElementsByClassName('collection');
// console.log(myCollection);
// console.log(typeof(myCollection))
// for (let acollection of myCollection){
//     console.log(acollection);
// }

// let myTag = document.getElementsByTagName('div');
// console.log(myTag);
// for(let aTag of myTag){
//     console.log(aTag);
// }

// let query = document.querySelectorAll('.collection');
// console.log(query)


// let myTag = document.getElementsByTagName('div');
// console.log(myTag);
// let myTag2 = document.getElementsByTagName('h1');
// console.log(myTag2);
// let colorName = document.querySelector('.color');
// console.log(colorName);
// let button = document.querySelector('#btn');
// console.log(button);
// let buttonTag = document.querySelectorAll('.btn');
// console.log(buttonTag);



// let navigation = document.querySelector('#primary')
// let eachLink;
// eachLink = navigation.children[1].textContent = 'Devices';
// console.log(eachLink);

// let firstItem = document.querySelector('.list-item');
// let list = firstItem.parentElement.parentElement;
// console.log(list);

// let studentProfile = [
//     {
//         name : 'Ogungbure Mayowa',
//         matricNumber : '19N02/021',
//         phone : +2348181283144,
//         email : 'ogungburemayowa@gmail.com'
//     },

//     {
//         name : 'Ibirogba Olanrewaju',
//         matricNumber : '19N05/015',
//         phone : +23490912345432,
//         email : 'olarenwajuoscar@gmail.com'
        
//     },

//     {
//         name : 'Osigbosin Adewunmi',
//         matricNumber : '19N02/038',
//         phone : +2347053312471,
//         email : 'osigbosinelizabeth@gmail.com'
        
//     },
// ]



// const greeting = document.getElementById('greeting')

// const jsStyle = 'myDiv'
// greeting.className = jsStyle

// greeting.classList.add('intro')
// console.log(greeting);

// greeting.classList.toggle('myStyles')

// if(greeting.classList.contains('myStyles')){
//     alert('class myStyles is available')
// }


// const firstClass = document.getElementById('div')

// firstClass.className = 'intro'
// let element;
// element = firstClass.children[0].classList.add('h1')
// element = firstClass.children[1].classList.add('h3')
// // if(firstClass.classList.contains('intro')){
// //     alert('YEAH!')
// // }
// // else{
// //     alert('no')
// // }
// element = firstClass.children[0].classList.remove('h1')
// element = firstClass.children[1].classList.remove('h3')

// console.log(firstClass)


// const body = document.body
// const elem = document.createElement('a')
// const content = document.querySelectorAll('.text')

// elem.id = 'intro'
// elem.className = 'start'
// elem.href = 'https://www.facebook.com'
// elem.textContent = 'CLICK TO VISIT MY FACEBOOK PAGE'

// body.appendChild(elem)

// content[0].remove()

// const head = document.createElement('h2')

// head.setAttribute('class', 'heading')
// head.setAttribute('id', 'head2')
// head.textContent = 'WELCOME'
// body.appendChild(head)

// head.removeAttribute('id')

// console.log(head);
// console.log(elem)


// const container = document.createElement('div')
// const heading = document.createElement('h1')

// heading.textContent = 'Lorem ipsum la fes de lapor'

// container.appendChild(heading)
// console.log(container)


// const hello = document.querySelector('hello')
// const clickMe = document.getElementById('addClick')

// clickMe.addEventListener('click', myClick)

// function myClick(){
//     alert('Hello')
// }


// const image1 = document.getElementById('image1')
// const image2 = document.getElementById('image2')
// const nicki = document.getElementById('nicki')
// const davido = document.getElementById('davido')

// // Hide images
// image1.style.display = 'none'
// image2.style.display = 'none'

// // Create events
// nicki.addEventListener('click', myFunc)

// function myFunc(){
//     image1.style.display = 'block'
//     image2.style.display = 'none'
// }

// davido.addEventListener('mouseenter', nextFunc)

// function nextFunc(){
//     image2.style.display = 'block'
//     image1.style.display = 'none'

// }


// const number = document.getElementById('number')
// const myBtn = document.querySelector('#btn')
// const counter = document.getElementById('counter')
// const button = document.querySelectorAll('.btn')

// myBtn.addEventListener('click', myFunc)

// function myFunc(e){
//     console.log(e.target);
// }
const myForm = document.getElementById('myForm')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const myPassword = document.getElementById('password')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const output = document.querySelector('.output')

myForm.addEventListener('submit', function(e){
    e.preventDefault()

    if(firstName.value.length === 0){
        output.innerHTML = 'Please enter your name'
        output.style.color = 'red'
        output.style.fontSize = '1em'
    }
    else if(lastName.value.length === 0){
        output.innerHTML = 'Please enter last name'
        output.style.color = 'red'
        output.style.fontSize = '1em'
    }
    else if(email.value.length === 0){
        output.innerHTML = 'Please enter your email address'
        output.style.color = 'red'
        output.style.fontSize = '1em'
    }
    else if(myPassword.value.length < 6){
        output.innerHTML = 'Password should contain 6 or more characters'
        output.style.color = 'red'
        output.style.fontSize = '1em'
    }

    else{
        output.innerHTML = 'Congratulations!! You have successfully registered'
        output.style.color = 'green'
        output.style.fontSize = '1em'
    }
})



// myBtn.addEventListener('click', generateNum)
// let num = 0;
// function generateNum(){
//     num = Math.floor((Math.random() * 100) + 1) // random number between 1 and 100
//     number.textContent = num
// }

// let count = 0;

// button.forEach((btn) => {
//     btn.addEventListener('click', function(){
//         if(btn.classList.contains('add')){
//             count++
//             counter.textContent = count
//         }
//         else if(btn.classList.contains('reset')){
//             count = 0
//             counter.textContent = count
//         }
//         else{
//             count --
//             counter.textContent = count
//         }
//     })
// })