/*


0. =========== some tricky logical things ===========

#How to check if a year is a leap year or not 
  
let isLeapYear = year =>  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

https: //www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php







  # A funny consequence
    let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.





# Comparison with null and undefined
let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.

Strange result: null vs 0
Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

An incomparable undefined
The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
Why does it dislike zero so much? Always false!

We get these results because:

Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.
Avoid problems
Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

Treat any comparison with undefined/null except the strict equality === with exceptional care.
Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.





# mainly: logical || operator returns the first truthy value, r jodi shob gula falsy hoy, tobe last falsy value
         logical && operator returns the first falsy value, jodi shob value truthy hoy, tobe last truthy value return korbe


logical operator sobsomoy e boolean value return kore 
logical or first truthy value paoa matro ebong logical and first falsy value paoa matro execution stop kore ebong oi value return kore.
logical or first truthy value return kore, jodi ektao truthy na thake taile last falsy value return kore. 
   ar logical and first falsy value return kore, ar jodi shob value truthy hoy, taile last value ta return kore logical and.
The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");
console.log(undefined || 0 || null);

console.log(undefined && 0 && null);
console.log(1 && '0' && undefined == null);
true || console.log(`will I be executed? `);

alert( alert(1) || 2 || alert(3) );
   explanation: The call to alert does not return a value. Or, in other words, it returns undefined.


alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.


  nullish operator:
     // shows the first defined value: eita undefined r null ke ignore kore jaay
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

|| returns the first truthy value, ?? returns the first defined value



let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");


console.log(undefined || 0 || null);



console.log(undefined && 0 && null);
console.log(1 && '0' && undefined == null);
true || console.log(`will I be executed? `);

console.log(true && false || true || false);

alert( alert(1) || 2 || alert(3) ); // dinseshe alert kintu undefined e return korbe, tai ekhane first truthy value 2
alert( alert(1) && alert(2) );





















1. =============== logical or ==============
var name = ''
var fullname = name || 'HM Nayem'
console.log(fullname)




2. ============ logical and ===============
var isOk = false
isOk && console.log('Everything is OK')




3. =================== switch ===============
var date = new Date()
var today = date.getDay()
switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1: 
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3: 
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5: 
        console.log('Today is Friday')
        break
    case 6: 
        console.log('Today is Saturday')
        break;
    code 7:
    code 8: 
       console.log(`this is an example for common code blocks, it can be more)
       break;
    default: console.log('Not a Valid Number')
}
* switch statement compares its parameter strictly with the cases using === . I must be aware of this.











4. ==================== ternery operator ===================
var result = n % 2 === 0 ? 'EVEN' : 'ODD'
console.log(result)






*/