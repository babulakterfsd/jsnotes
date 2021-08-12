/*



1. ============ How does web api and callback queue work in a browser? ============

web api ar callback queue browser e kivabe kaj kore ta bojhar jonno er cheye valo udahoron r hote par e na 

function hello() {
    console.log(`first line`);
    let func = () => {
        setTimeout(() => {
           console.log(`line under settimeout`);
        },3000)
    }
    console.log(func());
    console.log(`second line`);
    console.log(func());
}
hello()












 
2. ============ Give an example of the difference between let and var =============

let LANGUAGE = 'java';
let language = 'javascript'

function getcalled() {
    if(!language) {
        let language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getcalled()}`);

var LANGUAGE = 'java';
var language = 'javascript'

function getcalled() {
    if(!language) {
        var language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getcalled()}`);















 




3. ================== what is closure? ===============
     Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

 function test() {
     var msg = 'I am Learning Lexical Scope and Closure'
     function sayMsg() {
        console.log(msg)
     }
     sayMsg()
 }














4. ================= magic of setTimeout and closure ===============
for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}











*/