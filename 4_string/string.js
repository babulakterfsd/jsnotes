'use strict';

/*

1. ======================= String methods =================== 


str.length
str.indexOf()
str.search()
str.slice()
str.substr()
str.substring()
str.replace()
str.trim()
str.charAt()
str.charCodeAt()
str.split()
str.concat()
str.toUppercase()
str.toLowerCase()
str.repeat()
str.match()
str.padsStart()
str.padsEnd()
str.includes()
str.startsWith()
str.endsWith()



  
let str = `This is a string in a String`

*** str.length - str er length ber kore eta 

*** str.indexOf(`m`) - kono nirdishto character er first index ta kothay seta ber kore 

*** str.search() - kono nirdishto term ke khuje ber kore, bivinno regular expression use kore ei search ke onk strong kora jay

*** str.replace(//string/ig, `object`) - string er kono ekta ongshoke 2nd parametere dara replce kora hoy, Rgexp use kore strong banano hoy

*** str.slice(12, 17) - string er nirdisto ongsho katar jonno eta use kora hoy .. first parameter theke second parameter porjonto kete ekta notun string return korbe , negative value dile pichon theke katbe

*** str.substr(12,17) - slice er motoi, just slice er 2nd parameter kon index porjonto katbe seta nirdesh kore, r substring er second parameter length nirdesh kore kata string er length koto hobe 

*** str.charAt(9) - oi index e kon character ache seta ber kore dey

*** str.concat(str2) - onno string ke concat kore 

*** str.trim() - string er dui pashe kono extra space thakle remove kore dey , just dui pasher, majhe 50 ta thakle remove korbe na 

*** str.startsWith(`t`) - string ta ki diye shuru hoice seta parameter er upor nirvor kore true false return kore , ekoivabe endsWith o ache


*** str.repeat(5) - oi string ta 5 bar repeat korbe

*** str.includes(`string`) - returns true or false based on if the para exists in the string or not

*** str.split(` `) - kono string ke array te convert kore ... kisher upor vitti kore array banabe seta parameter hishebe dite hoy

*** str.match(/str/ig) - oi string er kothay kothay koyta match pailo seta return korbe
     











2. ====== How to check the first letter of a string is capital or small? ==========  // https://stackabuse.com/javascript-check-if-first-letter-of-a-string-is-upper-case/

   let str = '  $ This is Bangladesh' ;

function checker(str) {
   if(str.trim().charAt(0).match(/[0-9]/g) != null) {
       console.log(`First character is a number`);
   } else if(str.trim().charAt(0) == str.trim().charAt(0).toUpperCase()) {
       if(str.trim().charCodeAt(0) >= 65 && str.trim().charCodeAt(0) <= 90) {
         console.log(`First character is an upperCase character`);
       } else {
           console.log(`First character is a symbol`);
       }
   } else {
       console.log(`First character is a lowercase character`);
   }
}

checker(str)





3. ====================== How to Reverse a string ?  =====================
           
             (Mathod one)
let str = `I am Babul Akter`;
console.log(str.split(' ').reverse().join(' '));




     (Mathod two)
let mystr = 'farhan';
function revstr(str) {
    let rvstr = '';
      for(let i = 0; i < str.length; i++) {
          rvstr = str[i] + rvstr;
      }
      return rvstr;
}
console.log(revstr(mystr));




       (Mathod three)
 let name = `My name is Awal`;
let ulta = [...name].reverse().join('')
console.log(ulta);














4. ================== my own idea to find spaces in a string ================
let str = `      this is a string in  this line `;
console.log(str.match(/ /g).length);














5. ================= how to find a text's positions in a string? ==================

let str = `As sly as a fox, as strong as an ox`;
let target = 'as';
let pos = -1;

while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log( pos );
  }
   /* 

while loop to bujhen,  naki?
sudhu vitorer logic ta?
Niamat
accha logic ta explain korar try korchi...
emnite to janen j,
jodi targeted str na pawa jay, tahole  -1 return kore.
tai ekhane logic diche j,
jodi -1 na hoy, tar mane jodi string er moddhe targeted value ta thake. tahole loop er vitore dhukbe. noile dhukbena
Niamat
r logic ta likhche eivabe j,
prothome pos er value change korche. mane pos er value hobe 'as' er indexof value ta. tai jodi string er moddhe 'as' na thake, tahole pos er man hobe -1.
r pos er man -1 hole eta equal -1 hoye jabe. tai while vitore condition false hoye jabe.
r jodi string er moddhe 'as' pawa jay, tahole pos er man hobe oi index value ta.
r sheta tokhon hobe not equal -1.
mane condition true.
tarpor vitore dhukbe.
r ekhane vitore jei console log dichen, condition true hole oita to choltei thakbe.
break korar moto kichu dile, tarpor break hobe.

let str = `As sly as a fox, as strong as an ox`;
let arr = str.split(` `);

arr.forEach((v,i) => {  // word wise position
    if(v == `as`) {
        console.log(v,i);
    }
})










6. ==================== How to count words in a string ? =====================

let mystr = `   I'm the    king   007 !  `;  // string whose words are going to be counted (21)

function countWords(str) {
    let totalLength = str.length; //length of the string(how many characters are there)
    let onlyLetterAndNumbers = str.replace(/[^a-zA-Z0-9]/gi, ``).length; //counts all the letters and numbers only
    let nonLetterAndNumbers = totalLength - onlyLetterAndNumbers; // substract all the letters and numbers from total length and get non letters length

    if (onlyLetterAndNumbers != 0) { // if there is letter or numbers in the string this will be executed
        return nonLetterAndNumbers + str.match(/[\w]+/g).length;
    } else {  // if there is no letter or numbers in the string this will be executed
        return nonLetterAndNumbers;
    }
}

console.log(countWords(mystr)); // final result













7. ==================== How to get the last word of a string ? ====================
let myStr = `amar shonar bangla  hello    `;
function getTheLastWord(str) {
    let makeArray = str.trim().split(' ');
    let lastword = makeArray[makeArray.length - 1];
    return lastword;
}
console.log(getTheLastWord(myStr));












8. =============== how to remove double words from a string? ================

let str = `The name of this country is Bangladesh and Bangladesh is a progressing country`;

let newArr = [];
let makeArr = str.split(` `);

makeArr.forEach((word) => {
    if(!newArr.includes(word)) {
        newArr.push(word)
    }
})

console.log(newArr);






9. ============== RegExp ===========

The RegExp \W Metacharacter in JavaScript is used to find the non word character i.e. characters which are not from a to z, A to Z, 0 to 9. It is same as [^a-zA-Z0-9].


*/    

