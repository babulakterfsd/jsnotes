/*  

0.  ================= Some important rules and things ============


  # console.log('00100' < '1'); //true
  console.log('00100' < 1); //false
  console.log("2" > "10"); //true
  console.log("2"/1 > "10"/1); //false
  console.log('a'>1); // false 
  console.log(1<'a'); // false


  

  # jodi html file e kono script tag er moddhe kono external file deya hoy, taile oi script tag er r ekta line o execute hobe na, external file tai execute hobe

  # JavaScript does not assume a semicolon before square brackets [...]

  #alert, prompt ar confirm er maddhome alertbox e kichu jiggesh kora jay .. promt ar confirm ke kono variable e rekhe tar return data store kora jay

  # Assignment = returns a value
      All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

      let a = 1;
      let b = 2;

      let c = 3 - (a = b + 1);

      alert( a ); // 3
      alert( c ); // 0

In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.
Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.
Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.


# Chaining Assignment
let a, b, c;

a = b = c = 2 + 2;

b = `hello`

alert( a ); // 4
alert( b ); // hello
alert( c ); // 4

  Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.



# Modify and assign
let n = 2;
n *= 3 + 5;
alert( n ); // 16  (right part evaluated first, same as n *= 8)



# confliction between assignment chaining vs comma operator

let a, b, c;

b = `hello`;

a = (b = 3 + 2), (c = b + 8), 10  // ekhane ashole a assignment chaining ta ke gurutto dile b er value pabe, abar comma er niyome 10 pabe .. ashole js assignment chaining ta kei dhore , orthat a = b .. r etar karon hocche ei udahorone parenthisis use kora hoiche chaining er somoy

b = 25

console.log(a);
console.log(b);
console.log(c);

ekta clue diye rakhi .. marattok ekta bepar ghottese ekhane ... hoyto apnar kache easy lagbe, but onk senior rao eta te pach lgay .. conflict ta ashole hoy comma r assignment chaining ei duita bishoy er moddhe ... chaining er somoy dan theke baame evaluate kora hoy, r commar khetre shob gula calculate korleo return kore / store hoy last value tai .. ebar dekhen













1. ==================== Date ==================

let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thrusday`, `Friday`, `saturday`];
let d = new Date();

console.log(`Lcal time now: ${d.toLocaleTimeString()}`);
console.log(`Today is: ${days[d.getDay()]}, ${d.toLocaleDateString()}`);






2. ============== How to show current day and current time? ================
Today is : Tuesday //emon output ante hobe
Current time is : 10 PM : 30 : 38 //emon output ante hobe

let currenttime = new Date();
let day = currenttime.getDay();
let nameofdays = ['Sunday', 'Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'friday', 'Saturday'];
let today = nameofdays[day];
let firstconsole = `Today is : ${today}`;
console.log(firstconsole);


let sec = currenttime.getSeconds();
let minute = currenttime.getMinutes();

let hour = currenttime.getHours();

let prepand = (hour >= 12) ? 'PM' : 'AM';

hour = (hour >= 12) ? hour - 12 : hour;


if (hour === 0 && prepand === 'PM')  { 
   hour = 12;
   prepand=' PM';
} 

  if (hour === 0 && prepand === 'AM') { 
   hour = 12;
   prepand='AM';
} 
console.log(`current time is ${hour}${prepand} : ${minute} min : ${sec} sec`);













3. ===========================  Math methods and properties =======================
     
*** Math.round() - vitorer number ke nearest integer e niye jaay , .4 porjonto hole nicher number banay, r .5 theke upore hole uporer number banay

*** Math.random() - 0 theke 1 er moddhe random ekta number generate kore ... 

*** Math.floor() - nicher number e convert kore 

*** Math.ceil() - uporer number e convert kore

*** Math.abs() - absolute value return kore

*** Math.min() - min value return kore 

*** Math.max() - max value return kore

*** Math.trunc() - integer part ta return kore just

*** Math.sign() - Math.sign() returns only 1,0,-1 if the number is negative, null or positive:

*** Math.pow(x,y) - power korar khetre laage

*** Math.sqrt(x) - x er square root ber korte laage


















4. ========================== Number methodes mostly used =================

*** isNaN(5) - return false, it would return true if the parametere was anything except a number ..
     
*** kono kichuke Number() er moddhe rakhle , ba varible.toNumber() korle othoba oi varibale er samne + dile ta number e convert hobe .. r jodi convert kora possible na hoy, tobe NaN hobe .. var.toNumber(2 / 8 / 10) eta diye jothakrome binary, octal, decimal kora jay 

**** num.parseInt(`100`) - eta number integer e convert korbe , convert  na korte parle NaN hobe

*** num.parseFloat(`100.3333`) - etao number integer ei convert korbe , but doshomik soho , convert  na korte parle NaN hobe

***num.toFixed(2) - doshomik er pore joto digit e thak, 2 ta banabe , tk er hishebe eta khub kajer 















5. ========== how to get a random number between two integers? ==============
function getRand(max,min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRand(20,11));





















6. ================= how to convert binary to decimal? ==============
function bintodec(bin) {
    return parseInt(bin, 2).toString(10);
}
console.log(bintodec(101100011));





7. ===================== Write some best practices of javascript ===============

 * variable or function name should be or must be meaningfull, descriptive so that anyone can easily get why the variable was declared and what it is doing now. But variables should not conatin any extra word .

 * inside a function, try to avoid setting variables value from a consition, use default paraeter instead.

 * most importantly, try to declare a fucntion just to solve a single task. this is an important rule to be followed in functional programmming.

 * Never pollute any global object. if needed, see 14 of object lession







8. ===================== How does parseInt work? ===================

console.log(parseInt(37,5)); //3
console.log(parseInt(57,5)); //NaN
  
  ekhane,
     parseInt() এ ২য় প্যারামিটার টা হল radix point/ base. আপনি সেখানে 5 দিয়েছেন। 5 base এ নাম্বার আছে 0,1,2,3,4 ।তাই প্রথম ক্ষেত্রে 37 টা হইছে 3, আর ২য় ক্ষেত্রে 57 এর কোন সংখ্যাই ঐ বেইজ এ নাই, আর না থাকলে NaN.




9. ============== what is BigInt? ============
 জাভাস্ক্রিপ্ট এ নাম্বার টাইপ এ ইন্টিজার এর সেইফ রেঞ্জ হল 
-9007199254740991 (-(2^53-1)) 9007199254740991 (2^53-1) এর ভেতর। এর চেয়ে বড় নাম্বার দিলে সেটা রাউন্ড হয়ে প্রিসিশন লস হয়। এই রেঞ্জ সমস্যার সমাধান করার জন্য BigInt/BigInt()।





10. ========= primitive vs reference data types ========

  // primitive type data sorasori stack data structer hishebe memory te thake, r reference type heap memory te location paay , then variable er naam ekta pointer set kore stack e , jei pointer ta abar heap er oi location e j value ta ache, setake point kore rakhe

   // let's see the difference between mutation vs asignment; ekhane bishoyta hocche mutate korle aager value ta kei change kore. ar asignment er khetre notun ekta pointer toiri hoy + notun kore HEAP memory te location ney.
let person = {
    name: `Awal`,
    age: 28
}

let anotherPerson = person;


person.age = 29; // mutation

person = {}  // asignment

let thirdPerson = person;

console.log(person);
console.log(anotherPerson);
console.log(thirdPerson);

















*/  