'use strict';

//all the problems are collected from w3resource

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

1. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let createDate = new Date(),
daysInWeeks = ['Sunday','Monday', 'TuesDay', 'WednesDay', 'ThrusDay', 'Friday', 'Saturday'];

console.log(`Today is: ${daysInWeeks[createDate.getDay()]}`);

let hour = createDate.getHours(),
minutes = createDate.getMinutes(),
seconds = createDate.getSeconds();

let modifier = (hour >= 12) ? 'pm' : 'am';

if(hour > 12) {
hour = hour - 12
}
if(hour == 0 && modifier == 'am') {
hour = 12;
}

console.log(`Current time is: ${hour} ${modifier} : ${minutes} : ${seconds}`);





7. 
for(let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1 );
    if(date.getDay() === 0) {
        console.log(`${year}'s first january is sunday `);
    }
}





9. 
function daysLeft(year, date) {
  let today = new Date()
  let targetDay = new Date(`${date},` + year)

  let miliSecondsInaDay = 24 * 60 * 60 * 1000;

  let daysleft = Math.round((targetDay.getTime() - today.getTime()) / miliSecondsInaDay)

  console.log(`${daysleft} days left for ${targetDay.toDateString()}`);
}

daysLeft(2022, "Apr 27")
