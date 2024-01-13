//setInterval - repeat execute a function block code
//in a limited interval.

// setInterval(
//   () => console.log(`This function will e executed every 3 seconds`),
//   3000
// );

// setInterval(
//   () => console.log(`This function is executed every 1 second`),
//   1000
// );

// setInterval(() => console.log(`This function executes every 2 seconds`), 2000);

const intervalId = setInterval(function () { //executes the code in interval.
  console.log(`This function is being executer at the interval`);
},1000) 

//clearInterval
setTimeout(function () {  
  clearInterval(intervalId) //stops the setInterval 
  console.log(`Interval stopped`); //prints "Interval stopped"
},10000) //executes the code after 10 seconds
//setTimeout - use to execute a block of code after a specified lenght of time.
//like a timebomb ticking to go off or execute its function after "timeout"

// setTimeout(function () { //anonymous func
//   console.log(`This function executed after 3 seconds`);
// }, 3000)

// setTimeout( //arrow func
//   () => console.log(`This function executed after 5 seconds`),
//   5000
// );