const currentDate = new Date();
console.log(currentDate);

//year, month, day, hours, minutes, seconds, milliseconds

const customDate = new Date(2024, 0, 13, 20, 43, 0, 0);
console.log(customDate);

//Accessing Date from new Date
const date = new Date(); // 0 based index.
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const ms = date.getMilliseconds();
console.log(`Year: ${year}`);
console.log(`Month: ${month}`); //0-January, 1-February and so on
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`Milliseconds: ${ms}`);

//DATE methods
console.log("Date Format Methods");
console.log(date.toDateString()); //Output: "Sat Jan 13 2024"
console.log(date.toISOString()); //Output: "2024-01-13T22:25:00.000Z"
console.log(date.toLocaleString()); //Output: "1/14/2024, 6:25:00 AM" (assuming your locale is Cagayan de Oro, Philippines)
