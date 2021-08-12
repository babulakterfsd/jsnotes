'use strict';

/* 

1. =====================  Object Methods  ====================

        *** Object.keys(obj) - print all the properties in an array
        *** Object.values(obj) - print all the values in an array
        *** Object.entries(obj) - print all the properties and values in an muti-dimensional array
        *** Object.assign({},obj) - copies the reference of obj and creates a new array same as obj
        ***







2. ================= Explain prototype, inheritance in the best way ===============


prototypical inheritance (constructor pattern)

// this function was created not to duplicate these codes whenever it's needed to inherit a parent objects prototype

function extend(parent,child) {  
    child.prototype = Object.create(parent.prototype); // inherit the proto 
    child.prototype.constructor = child // resets the constructor object 
}


// for example, this Person is the Parent object 
function Person(name) {
    this.name = name;
}
Person.prototype = {
    eat: function() {
        return `${this.name} can eat`
    }
}

//for example, this Cricketer is the child object which inhert properties and methods from the parent object
function Cricketer(name,playerType) {
    Person.call(this,name); // this line inherits the constructor or instance properties / methods of the parent object
    this.playerType = playerType;
}

extend(Person,Cricketer); // this line inherits the constructor or instance properties / methods of the parent object

Cricketer.prototype.bat = function() {  // let's add another method in childs prototype. To set all in one place could reset the prototype again
        return  `${this.name} can bat`
}

Cricketer.prototype.eat = function() {  // method overriding or polymorphism
    return `${this.name} can't eat a lot, cause he has to keep himself fit`
}


let sakib = new Cricketer(`sakib`,`all rounder`);  // create an object from Cricketer constrcuctor which is inheriting Person too . Thus, this object gets all the properties and methods of both Parent and child constructors

// console.log(sakib.name)
// console.log(sakib.playerType);
// console.log(sakib.bat());

let awal = new Person(`Awal`);

console.log(awal.eat());
console.log(sakib.eat()); // see how polymorphism works










3. ====================== how to create object with constructor fuction and make protoType based inheritance with polymorphism ... =====================





Let's learn oop; how to cerate a base object and then create thousands of objects and inherit the methods from the main object. ekhane ekta main object er moddhe common shob method ba property thakbe. then je koyta object e ashuk na kno, sekhane code duplicate na kore tader main object theke Object.create er maddhome prototypical inheritance ghotiye shob property ba method nijer na houa sotteo use korte parbe.

function Man(name,age) {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log(`${this.name} is eating from the constructor in Man Object`);
    };
}

Man.prototype = {
    walk() {
        console.log(`${this.name} is walking from the prototype in Person Object`);
    },
    sleep() {
        console.log(`${this.name} is sleeping from the prototype in Person Object`);
    }
}

function Player(name,age,type,nationality) { 
    Man.call(this,name,age); // ei line person er constructor ke inherit kore niye astese, eta comment korle eat method ashbe na 
    this.type = type;
    this.nationality = nationality;
}

Player.prototype = Object.create(Man.prototype); // eta person er proto ke inherit kortese 
Player.prototype.constructor = Player; // jehetu inherit er jonno cricketer er constructor reset hoye jacche person er constructor e, eta abar thik korche

let mushfiq = new Player('Mushfiq', 32, 'Batsman wicketkeeper', 'Bangladeshi')

console.log(mushfiq.name);
console.log(mushfiq.age);
console.log(mushfiq.type);
console.log(mushfiq.nationality);
mushfiq.eat() // cricketer er contructor e person call comment korle eta kaj korbe na 
mushfiq.walk()
mushfiq.sleep()












4. ============ how to create object with es6 class and make class based inheritance with polymorphism ... ===============

class Master {
    constructor() {

    }
    jonmo() {
        console.log(`${this.name} has taken birth`);
    }
    biye() {
        console.log(`${this.name} has been married now`);
    }
    mrittu() {
        console.log(`${this.name} is dead now`);
    }
}

class Person extends Master {
    constructor(name,age) {
        super();
        this.name = name;
        this.age = age;
        this.dance = function() {
            console.log(`${this.name} is dancing in Person constructor`);
        }
    }
    eat() {
        console.log(`${this.name} is eating in Person prototype ! yes, everything out of constructor goes to proto in class`);
    }
}

class Cricketer extends Person {
    constructor(name,age,type,nationality) {
        super(name,age);
        this.type = type;
        this.nationality = nationality
    }
}

let tamim = new Cricketer('tamim', 33, 'batsman', 'bangladeshi')

console.log(tamim.name);
console.log(tamim.age);
console.log(tamim.type);
console.log(tamim.nationality);
tamim.jonmo()
tamim.biye()
tamim.mrittu()
tamim.eat()
tamim.dance()









5. ================== How object lieral actually works? ==================
  
object literal -> function creates and returnes object (etate new keyword lagbe na) -> new keyword diye (ekhane this naame ekta object create hoy ar oi this e return kore, hubuhu aagertar moto.. khali ekhane amake manually object create korte hobe na) -> class

function person(name,age,country) {
    // let person = {}; mash create korar somoy jodi new use na kori, taile ei line likhte hobe, maane manually amakei banate hobe

    this.name = name,
    this.age = age,
    this.country = country
    // return person; // new use na korle return o amakei korte hobe
}

let mash = new person('Mash', 36, 'Bangladesh');

console.log(mash.country);










6. ===============  How to compare two objects? ============
var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 2
}

if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
} else {
    console.log(false)
}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

















7. ================= Object loop and a trick to find property ==================
var obj = {
    x: 40,
    y: 60, 
    z: 75
}
console.log('x' in obj) // returns true / false if x exists in the object or not
  
for (var i in obj) {
    console.log(i)
    console.log(i + ': ' + obj[i]) // object loop
}


//creating a new Object from a specific object
var obj2 = Object.assign({}, obj)
obj2.x = 100











8. ================== an example of function constructer of object ===============

 var createRect = function (width, height) {
     return {
         width: width,
         height: height,
    
         draw: function() {
            console.log('I am a rectangle')
           this.printProperties()
             console.log(this)
         },
    
         printProperties: function () {
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
     }
 }
 var rect1 = createRect(10, 8)
 rect1.draw()








9. =======================  what is Call, Apply, Bind ?  =====================
 function myFunc(c, d) {
    console.log(this)
     console.log(this.a + this.b + c + d)
 }
 myFunc.call({a: 40, b: 25}, 10, 5)
 myFunc.apply({a: 400, b: 250}, [10, 5])

 myFunc.apply({})
 myFunc()

 var testBind = myFunc.bind({ a: 7, b: 3 })
 testBind(5, 7)









10.===================== explain pass by value and pass by reference ============

 Pass by Value vs Pass by Reference or Call by Value vs Call by Reference. ekhetre value, value e thake. kintu refernece type purai change hoye jaay jodi jekono jayga theke change kora hoy
 var n = 10
 function change(n) { //value
     n = n + 100
     console.log(n)
 }
 change(n)
 console.log(n)



 var obj = {
     a: 10,
     b: 20
 }
 function changeMe(obj) { //reference
     obj.a = obj.a + 100
     obj.b = obj.b + 100
     console.log(obj)
 }

 changeMe(obj)
 console.log(obj)















11. ==================== what is Property descriptor? ===================
 var person = {
     name: 'HM Nayem'
 }
 var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
 console.log(descriptor)

 Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'Hasan Mahmud Nayem'
 })








12. ================== how to compare two objects ? ===================
     Object.stringify(obj1) === Object.stringify(obj1)



13. =========== How to make an array an object with fromEntries? =============

let arr = [
    [`name`, `Robiul Awal`],
    [`age`, 28],
    [`country`, `Bangladesh`]
]
let obj = Object.fromEntries(arr)
console.log(obj);






14. ============= How can you create and set a custom method globally without polluting the global object? ===========

class Awal extends Array {
    constructor() {
        super()
    }

    babul() {
        console.log(`this is a custom method for array`);
    }
}

let man = new Awal();

console.log(Array.isArray(man));

man[0] = `sakib`;
man[1] = `tamim`;
man[2] = `bangladesh`

man.forEach((v) => {
    console.log(v);
})

man.babul()





15. ========= How to copy an object with immutability ? ==========


let person = {
    name: `Awal`,
    age: 28
}

// let secondPerson = Object.assign({}, person);

let secondPerson = {...person} // spread operator r Object.assign ekoi kaj kore .. kheyal korar bishoy hocche, spread operator kono object k deeply scap korte pare na , orthat second layer e jete pare na .. jemon, person e jodi emon ekta property thakto jeta muloto ekta array, oi array ke se spread korte parto na

secondPerson.age = 29

console.log(person);
console.log(secondPerson);






















*/