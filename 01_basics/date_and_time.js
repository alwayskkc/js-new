let myDate =  new Date()
/*
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

let myDate1 = new Date("11-07-2024")
let myCreatedDate = new Date(2024, 10, 7)
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate);
console.log(Math.floor(myTimeStamp/1000));
*/
console.log(myDate.getDay());

let weekDay = myDate.toLocaleString('default',{
    weekday: "long"
})

console.log(weekDay);
/*
const { Temporal } = require('@js-temporal/polyfill');
console.log(Temporal.Now.instant());*/


