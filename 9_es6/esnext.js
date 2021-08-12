/*



1. =========== An important note on arrow function or argument object ==========
Arrow function j jehetu rest parameter same arguments object er motoi kaj kore, tai r arguments object rakhe ni .. arrow te arguments object nai .. tar bodole rest operator er oi variable tai same to same arguments er moto kaj korbe ..















2. ================  es6 iterator fucntion with an array ==============
 const arr = [10, 22, 35]
 function createIterator(collection) {
     let i = 0
    return {
        next() {
           return {
                done: i >= collection.length,
               value: collection[i++]
            }
         }
     }
 }

 let iterate = createIterator(arr)
 let iterate = arr[Symbol.iterator]()

 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())
 console.log(iterate.next())








3. ================== how to iterate a string through es6 iterator =============
let str = 'TEXT'
let iterateText = str[Symbol.iterator]()

console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
















4. ================ how to make an object iterable with iterator function? ========
 let obj = {
    start: 1,
    end: 5,
   [Symbol.iterator]: function () {
       let currentValue = this.start
       const self = this
       return {
           next() {
               return {
                   done: currentValue > self.end,
                   value: currentValue > self.end ? undefined : currentValue++
               }
           }
       }
   }
}
let iterate = obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())











5. ================ what is generator function in es6? ===============
let arr = [1,2,3,4,5,6]
function* generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i]
    }
}
let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* generate() { // another example of generator
    yield `amar`
    yield `shonar`
    yield `bangla`
}

let i = generate();

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());














6. ================= how to check if a data type is iterable or not? ==============
function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}
console.log(isIterable({}))
console.log(isIterable(obj))
console.log(isIterable([]))
console.log(isIterable('test'))
console.log(isIterable(new Number(45)))
console.log(isIterable(new Map()))
console.log(isIterable(new Set()))








7. ================== All about es6 set ===============
//set is case sensitive

let set = new Set([1, 2, 3])
set.add(5)
set.add(6)
set.add(1)
set.add(2)
console.log(set)
console.log(set.size)

console.log(set.has(5))
console.log(set)
console.log(set.keys())
console.log(set.values())

let keyIterate = set.values()
console.log(keyIterate.next())
console.log(keyIterate.next())

for (let v of set) {
    console.log(v)
}
console.log(set.entries())

let a={a: 10}, b={b: 20}
let set = new Set([a, b])
 a = null
 console.log(set)

  let arr = [...set]
  console.log(arr[0]


let awal = {name: `awal`}
let babul = {name: `Babul`}

let weakset = new WeakSet([awal,babul]) // ekhane object ke value hishebe rakha hoy
console.log(weakset);











8. ==================== all about es6 map =====================
let map = new Map([
        ['a', 10],
        ['b', 20],
        ['c', 30]
    ])
    
    map.set('d', 40)
    map.set({name: 'HM Nayem'}, 45)
    
    map.delete('c')
    
    console.log(map.size)
    console.log(map)
    console.log(map.get('b'))
    console.log(map.values())
    console.log(map.keys())
    console.log(map.entries())
for (let [k, v] of map) {
    console.log(v, k)
}

let awal = {}
let babul = {}
let weakmap = new WeakMap([[awal,`Robiul Awal`],[babul,`Babul Akter`]]) //ekhane kintu puro ekta object kei key hishebe neya hoy, jar abar value set kore dite hoy.
console.log(weakmap);













9. ==================== What can you do using Symbol? ======================
  ১. অবজেক্ট  এর প্রপার্টি হাইড করা যায় 
  ২. নেম কলুশন এড়ানো যায় 
  ৩. ইজিলি কারেন্ট মেথড কে ওভাররাইড না করেই সেম নামে কোনো মেথড টার্গেটেড অবজেক্ট /  মাস্টার অবজেক্ট এর প্রোটোটাইপ এ ঢুকানো যায় 









10. ============= An important note on iterator and generator =============

kono kichu (object or anything) iterable hoite gele tar moddhe [Symbol.iterator] er nakom function er implementation thakte hobe ebong ei fnction ke call korle etar ekta iterator return korte hobe. string, array shorashori iterable. kintu object iterable na , etake iterator / generator use kore iterabol baniye nite hoy. 

abar ekta iterator er koyti protocol mante hoy, noile seta iterator hoy na. prothomoto oi iterator function ke ekta object return korte hobe, shei object er moddhe ekta next() namer method thakte hobe , shei next method ke abar emon ekta object return korte hobe jar vitor done ebong value naameer duita property thakbe.


iterator diye easily ekta non-iterable object iterable banano jay ebong tar upore for of loop ba rest/spread opertor use kore value ber kore ana jaay . tobe genarator aro upgraded. eta diye aro easily kaj ta kora jaay . iterator e nirdishto ekta protocol mante hoy . kintu generator jehetu ekta function, so etar moddhe ja iccha tai kora jaay.

generator function ke object er moddheo store kora jaay property / method hishebe ... othoba baire ekta alada function hishebeo use kora jay * use kore

Weakset ar Weakmap e sudhu object e rakha jay.. memory leakage thekano chara ei duitar ekhono porjonto special kono kaj nai. 




















11. ==== how to hide a property or a method using weakmap in a class ? =========

(Symbol use kore kora jay, but oita oto effective na. iccha korle oi data te access neya jaay, but weakmap er eita joss. jehetu proto er method weakmap diye hide kora jay na ba ami ekhono pari na, tai another ke Symbol dara e hide korlam)
    
let _name = new WeakMap();
let _age = new WeakMap();
let _another = new WeakMap();

class Person {
    constructor(name,age) {
        _name.set(this,name); //this er value hishebe name ke set kora hocche
        _age.set(this,age);
        _another.set(this, () => { //ei method ta keu hide korlam, arrow function use na korle parent er this ta paoa jabe na ekhane
            return `After 10 years, ${_name.get(this)}'s age will be ${_age.get(this) + 10}`   //get dara value ta paoa jacche
        })
    }
    print() {
        return `Age of ${_name.get(this)} is ${_age.get(this)} and ${_another.get(this)()}`
    }
}

let awal = new Person(`Awal`,28);

console.log(awal.print());


     Uporer same kaj ta , but es6 er getter setter er sathe 

let _name = new WeakMap();
let _met = new WeakMap();
let _another = Symbol();

class Person {
    constructor(name) {
        _name.set(this,name);
        _met.set(this, () => {
            return _name.get(this,name)
        })
    }

    // get name() {
    //     return _name.get(this);
    // }

    // set name(v) {
    //     return _name.set(this, v)
    // }

    [_another]() {
        return `this method is hidden and it exists in proto`
    }

    print() {
        console.log(_met.get(this)());
        console.log(this[_another]());
    }
}
let sakib = new Person(`sakib`)
sakib.print()
sakib.name = `awal`
console.log(sakib.name);














12. ======= How to make an object iterable with generator function? ========

   let obj = {
    a: 10,
    b: 20,
    c: 30
}

function* itr(collection) {
   let ele = Object.entries(collection);
    for(let x of ele) {
        yield x[1]
    }
}

let iterator = itr(obj)

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());




13. =========== How to check if a target is iterable or not =========

function isIterable(target) {
    if(typeof target[Symbol.iterator] === `function`) {
        return true;
    } else {
        return false
    }
}

*/