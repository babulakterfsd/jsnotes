'use strict';

/*




1. what is pure function ?
     --- A functionn that returns the same result if same arguments are given each time and if that function never make any changes of outside code, we can call that function as a pure function

2. What is first class function ?
    ---- if a function can be stored in a variable, or in an array or in an object , and we can create function as many we need and whereever we need, then we can call this functions as first call fucntions

3. What is Higher order function ?
    --- being a first class function, additionally if a function got this 2 extra feature like passing as arguments , and if those function returns another function, then we can call those kinda functions as higher order funciton

4. function composition kaake bole ?
    ---- ekta function er argument hishebe jkhn r ekta function er output deya hoy, tkhn setakei function composition bole


*** Javascript a kono function e jokhon amra baire theke kono value pass korbo , seta always pass by reference, hok seta primitive type ba reference type data







5. ==================== argumen object in a function ===============

function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

var a = addAll(1, 2, 3)
var b = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(a, b) // undefined undefined ashbe, karon oi function kichu return na kora shotteo ekta variable e store kora hoyeche













6. ==================== what is callback function ? show an example ===============

    let me = {
    name: 'Babul Akter',
    age: 27,
    email: 'xpawal@gmail.com'
}

function printMyself(person, cb, anothercb) {
    cb(person.email);
    if(person.age >= 18) {
        anothercb(person.age);
    }
    return 0;
}

printMyself(me, function(email) {
    console.log(`Email was sent to ${email}`);
}, function(age) {
    console.log(`Persons age's double is ${age * 2}`);
    console.log(`Persons real age is ${age}`);
});











7. ================ Give an example of a callback function that will call a function and get different results on condition every time =====================


let numarr = [1,2,3,4,5];
//this is the main function which will take an array as argument and creates a callback function as well
function touchArr(arr,cb) {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}

let odd = []; // an empty array is declared which will collect all odd numbers (elements) from the numarr through the callback funciton 
let even = []; // an empty array is declared which will collect all even numbers (elements) from the numarr through the callback funciton
let sum = 0; // a variable is declared which will store the total of the numarr elements through the callback funciton

touchArr(numarr, function(v) { //main function is called and callback is pushing passed elements (odds only) to the new array called odd
    if(v % 2 === 1) {
        odd.push(v)
    }
})

touchArr(numarr, function(v) { //main function is called and callback is pushing passed elements (evens only) to the new array called odd
    if (v % 2 === 0) {
        even.push(v)
    }
})

touchArr(numarr, function(v) { //main function is called and callback is calculating the total of the array elements and stores in sum
      sum += v;
})

// now see the results
console.log(odd);
console.log(even);
console.log(sum);
console.log(numarr);

















8. ============================== Show an example of recursive function which will calculate the sum from 1 to 10 ============================


let sum = 0;
function rec(n) {
  if ( n > 10) {
    return
  }
  if ( n % 2 == 1) {
    console.log(`${sum} + ${n} = ${sum + n}`);
    sum += n;
  }
   n++;
  rec(n);
}
rec(1);
console.log(`the sum of all odd number between 1 to 10 is = ${sum}`);


//lets make it better
let awal = [1,8,-20,30,80];
function rec(arr, lastIndex) {
  if ( lastIndex < 0) {
     return 0;
  }
  return arr[lastIndex] + rec(arr, (lastIndex - 1));
}
console.log(rec(awal, awal.length - 1));














9.=================  how to find the max number from a function arguments using arguments object   ====================

function func(a,b,c,d) {
    
    let x = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > x) {
            x = arguments[i];
        }
    }
    return x;

}
console.log(func(306,5,7,59,4, .365, -789, 100,45));










10.===================== a simple function that returns something =================
function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }

    var message = greet + ' ' + getFirstName()
    console.log(message)
}
something('Good Morning', 'Shegufa Taranjum')










11.========================= callback =====================
function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

function sum(a, b) {
    return a + b
}

var result = sample(5, 8, sum)
console.log(result)









12.===================== an example of function composition ===================
function print(inp) {
    console.log(inp)
}

function multiplyByFive(n) {
    return n * 5
}

function add(a, b) {
    return a + b
}
print(multiplyByFive(add(3, 5)))










13.============================ an example of currying ======================
function add(a, b, c) {
    return a + b + c
}
add(41, 52, 63)

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
var result = currying(5)(10)(15)
console.log(result)













14.========================= filter ======================
var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

var filteredArr = arr.filter(function (value) {
  return value > 4
 })
console.log(filteredArr)
//implementation of my own array filter
function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(myFilter(arr, function (value) {
    return value % 2 === 1
}))









15.============== implementation of my own array find and findIndex method ========
var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3]

var result = arr.find(function (value) {
     return value === 9
 })
console.log(result)


 var result = arr.findIndex(function (value) {
    return value === 9
 })
 console.log(result)


function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}

var result = myFind(arr, function(value) {
    return value === 9
})

console.log(result)


















16.========== implementation of my own array find and forEach method ========
var arr = [1, 2, 3, 4, 5]

 var sum = 0
 arr.forEach(function (value, index, arr) {
 console.log(value, index, arr)
    sum += value
 })
 console.log(sum)



function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
var sum = 0
forEach(arr, function (value, index, arr) {
    console.log(value, index, arr)
    sum += value
})
console.log(sum)



















17.================= implementation of my own array map method ==============
var arr = [1, 2, 3, 4, 5]

 var sqrArr = arr.map(function (value) {
     return value * value
 })
 console.log(sqrArr)



function myMap(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
var mten = myMap(arr, function (value) {
    return value * 10
})
console.log(mten)












18.================= implementation of my own array reduce method ==============
var arr = [67, 1, 2, 45, 3, 4, 5]

 var sum = arr.reduce(function (prev, curr) {
     return prev + curr
 }, 100)

 var max = arr.reduce(function (prev, curr) {
     return Math.max(prev, curr)
}, 0)

 console.log(sum)
 console.log(max)



function myReduce(arr, cb, acc) {

    for (var i = 0; i < arr.length; i++) {
        acc = cb (acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)

var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)

var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min)








19.=================== an example of recursive fucntion =================
function sayHi(n) {
    if (n === 0) {
        return 
    }
    console.log('Hi, I am Calling')
    sayHi(n - 1)
}
sayHi(10)


function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(5)) //will calculate the sum of 1-5


function fact(n) {
    if (n === 1) {
        return 1
    }

    return n * fact(n-1)
}
console.log(fact(4))  // factorial of 4



var arr = [1, 2, 3, 4, 5]
function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length - 1)) // will calculate the sum of an array










*/