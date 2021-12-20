'use strict';

/* 


1. ===================== Array methods =======================

*** arr.sort() - array ke sort kore lexical scope onujayee 

numeric sort : 
    var fruits = [100,25,48,97,-800,26];
    fruits.sort((a,b) =>  b - a)
    console.log(fruits);

*** arr.reverse() - array ke reverse order kore lexical scope onujayee, aage sort kore nite hoy array ke

*** arr.length - arraay er length koto jana jaay 

*** arr.toString() - arr ke string banay

*** arr.join(` * `) - same as toString, but eta ja iccha ta diyei join korano jaay 

*** arr.push() - adds element at the last
*** arr.pop()  - removes element from the last
*** arr.shift() - removes element from the first
*** arr.unshift() - adds element at first
*** arr.splice(2,3,``,``) - prothom ta index, ditiyo ta koyta delete hobe tar length, tarpor koyta add korte hobe segula

*** arr.concat(arr2) - array add kore

*** arr.foreach() - prottekta element return kre

*** arr.map() - The map() method creates a new array by performing a function on each array element.
    
*** arr.filter() - The filter() method creates a new array with array elements that passes a test.

*** arr.reduce(total,value) - The reduce() method runs a function on each array element to produce (reduce it to) a single value. value ta ke ekta variable e store korte hoy , othoba console.log(arr.reduce((a,b) => a + b ));

*** arr.evey() -The every() method check if all array values pass a test and retur true or false

*** arr.some() - The some() method check if any array values pass a test and retur true or false

*** arr.indexOf() - The indexOf() method searches an array for an element value and returns its position.

*** arr.lastindexOf() - returns the position of the last occurrence of the specified element.

*** arr.find() - The find() method returns the value of the first array element that passes a test function.

*** arr.findIndex() - The find() method returns the index  of the first array element that passes a test function.

*** arr.fill(v,start,end) - fill the array with a static value, 2nd and 3rd index is optional, it is used to specify where to start and where to end

*** arr.from(arr2) - copies the array to an another variable; 
             arr.from(`hello`) // [`h`,`e`,`l`,`l`,`o`]

*** arr.includes(v) - returns true or false if the value exists in the array or not


























2. =================== how to get the second max number of an array ===============

let array = [25,100,41,-54,20,54,6,9,-23,54,100,27] //return the seconnd largest number from it

function getSecondLargest(nums) {
    // Complete the function
    let filterredArray = Array.from(new Set(nums))

    let secondLargest = filterredArray.sort((a,b) => b - a)[1]

    return secondLargest;
}

console.log(getSecondLargest(array));



















3. ============ how to get the exact middle index array property? =============

     if the array length is odd, it will decrease 1 and then calculate.

  let num = [14,587,.365,-965,102,254,800,587,12,458,639];
let arr = ['babul', 'Awal', 'Zonayed', 'rozoni', 'Yoyo', 'alaina', 'kam', 'duck'];

function getMiddle(x) {
    let getmiddle = 0;

    if (x.length % 2 == 0) {
        getmiddle = x.length / 2;
    } else {
        getmiddle = (x.length -1) / 2;
    }
     return getmiddle;
}
console.log(arr[getMiddle(arr)]);









4. ============ How to remove duplicate elements from an array? =============


function getUnique(array){ // Defining function to get unique values from an array
var uniqueArray = [];
        

for(i=0; i < array.length; i++){ // Loop through array values
if(uniqueArray.indexOf(array[i]) === -1) {
uniqueArray.push(array[i]);
}
}
return uniqueArray;
}
    
var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]

othoba,
let arr = [1,2,3,4,2,1,5,3];
let set = new Set(arr);
arr = [];
set.forEach((v) => {
    arr.push(v)
})
console.log(arr);
















5. =================== find Prime number =================

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i === 0) {
             return false
        }
    }

    if (n < 2) {
        return false;
    }
    return true;
}

function showPrime(from,to) {
    let res = ``;
for(let i = from; i <= to; i++) {
    if (!isPrime(i)) {
        continue;
    }
    res += i + ' ';
}

  return res;
}

console.log(showPrime(5,25));














6. ================ Multi Dimensional Array  =================
var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]

console.log(arr[0][0])
console.log(arr[1][1])

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}










7. ================= Reverse an Array =================
let arr = [1, 'awal', 2, 'rozoni', 3, 'ayesha'];

for(let i = 0; i < (arr.length / 2); i++ ){
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);








8. ==================== Search Data from array ==================
let arr = [87,5,2,69,54,3];
let find = 69;
let isFound = false;

function finder(x) {
    for (let i = 0; i <x.length; i++) {
        if (x[i] == find) {
            console.log('there is ' + find + ' in the index ' + i);
            isFound = true;
            break;
        }
    } 
    if (!isFound) {
        console.log('data not found');  
    }
    return 0;
}
finder(arr);


othoba,
let arr = [1,2,3,4,5];
let set = new Set(arr)

console.log(set.has(40));








9. ============ How to find and calculate values from an array of objects? ===============


let products = [
    {id: 1, name: `Rashid Minicate Rice`, quantity: 1, price: 50},
    {id: 2, name: `Cream Milk Powder`, quantity: 1, price: 35},
    {id: 3, name: `Richi BBQ Chanachur`, quantity: 1, price: 30},
    {id: 4, name: `Rashid Minicate Rice`, quantity: 1, price: 50},
    {id: 5, name: `Rashid Minicate Rice`, quantity: 1, price: 50},
    {id: 6, name: `Rashid Minicate Rice`, quantity: 1, price: 50},
    {id: 7, name: `Cream Milk Powder`, quantity: 1, price: 35},
    {id: 8, name: `Rashid Minicate Rice`, quantity: 1, price: 50}
];

let testRepeat = [];
let result = [];

products.forEach((product) => {
    if(!testRepeat.includes(product.name)) {
        testRepeat.push(product.name)
        result.push(product)
    } else {
        let repeatProduct = result.find((prod) => prod.name === product.name);
        repeatProduct.price += product.price;
        repeatProduct.quantity += product.quantity;
    }
});

console.log(result);







*/