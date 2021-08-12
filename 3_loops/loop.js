/*


#handling bigInt with for loop

   function extraLongFactorials(n) {
    // Write your code here
    let fact = n > 20 ? 1n : 1;
    for (let i = n; i > 0; i--) {
        if (n > 20) {
            fact *= BigInt(i);
        } else {
            fact *= i;
        }
    }
    console.log(fact.toString());
}

extraLongFactorials(25)







1. ================== while loop ===============
while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got ' + rand)
    }
}


2. ==================== break keyword ==================
for (var i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        break
    } else {
        console.log(i)
    }
} 



3. =================  Continue keyword =================
for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 7) {
        continue
    } else {
        console.log(i)
    }
}



4. =================== Nested Loop or design pattern ====================
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

// first for is for line control , second for is for output; nested loop
var n = 10
for (var i = 1; i <= n; i++) {
    var result = '' // prothom for loop barbar result ke ekahne reset kore empty string hishebei shuru korche
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result) // prothom for loop ei console ta ke print koracche
}




* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
var n = 2
for (i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= n; j++) {
        result += '* '
    }
    console.log(result)
}

//another one
let count = 1;
let x = "* ";
for (let a = 0; a<=5; a +=1){
    console.log(x.repeat(count));
    count +=1;
}





//How to make pyramid with nested loop?


          *
         * *
        * * *
       * * * *
      * * * * *
     * * * * * *
    * * * * * * *
   * * * * * * * *
  * * * * * * * * *
 * * * * * * * * * *


function makePyramid(row) { //pyramid
    for(let i = 1; i < row; i++) {
        let output = '';
         for(let j = 1; j <= (row - i); j++) {
             output += ' ';
         }
         for(let k = 1; k <= i; k++) {
             output += '* ';
         }
         console.log(output);
    }
}
makePyramid(11); 






  * * * * * * * * * *
   * * * * * * * * *
    * * * * * * * *
     * * * * * * *
      * * * * * *
       * * * * *
        * * * *
         * * *
          * *
           *

function makePyramid(row) {   //reverse pyramid
    for(let i = 1; i < row; i++) {
        let output = '';
        for(let j = 1; j <= i; j++) {
            output += ' ';
        }
        for(let k = 1; k <= (row - i); k++) {
            output += ' *';
        }
         
         console.log(output);
    }
}

makePyramid(11);

etake shortest way te kora jaay repeat er maddhome
let time = 15;

for(let i = time; i > 0; i--) {
    console.log(` `.repeat(time - i) + `* `.repeat(i));
}










5. =========== How does for loop work ? =========== 
for(a = 1, console.log(`initialized`), b = 3, c = a * b; a < 3; a++, console.log(`updated`)) {
    console.log(`a = `, a);
    console.log(`b = `, b);
    console.log(`c = `, c);
}
//ekhan theke jeta bujha jay j, initialize prothome ekbar e hoy, pore initialize state e r jaay na, conditiion check kore r value update kore khali




6. আপনাদেরকে একটা এরে দেওয়া হবে, জার মধ্যে অনেকগুলা নাম্বার দেওয়া থাকবে। আপনাদের কাজ হলো এরে এর প্রত্যেকটা নাম্বার এর গুননিয়ক বের করতে হবে। শেষে একটা অবজেক্ট এর মধ্যে প্রত্যেকটা নাম্বার এর গুণনীয়ক রিটার্ন করতে হবে। 

যেমনঃ  
const arr = [6, 21];
এক্সপেক্টেড আউটপুটঃ 
{ 
case6: [ 1, 2, 3, 6 ], 
case21: [ 1, 3, 7, 21 ] 
} 

 let array = [10,11,12,13,14,15];

function multipliers(arr) {
    let elementContainer = {};

    for(let element of arr) {
        let multiplier = [];
          for(let i = 1; i <= element; i++) {
              if(element % i == 0) {
                multiplier.push(i)
              }
          }
          elementContainer[`case${element}`] = multiplier;
    }
    return elementContainer
}

console.log(multipliers(array));








*/