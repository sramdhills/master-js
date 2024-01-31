//filter() method is a built in array method in javascript that allows you to create
// a new array elements that pass a certain conditions. Basically filters  an array to new array

const songs = [
    {name: "Outta Time", duration: 2.54},
    {name: "Peak", duration: 3.25},
    {name: "Jungle", duration: 5.20},
]

console.log(songs.filter(song => song.duration > 3));
//

const computers = [
    {ram: 4, hdd: 300},
    {ram: 9, hdd: 500},
    {ram: 6, hdd: 200},
    {ram: 2, hdd: 900},
    {ram: 31, hdd: 800},
    {ram: 16, hdd: 1100},
]

console.log(computers.filter(comp => comp.ram < 7));

//filtermethod CHALLENGE PART 1

const ages = [32, 33, 16, 40, 18]
const adults = ages.filter(age => age >= 18)
console.log(adults);

//filter method using function for reusability
function checkAdults(age) {
    return age >= 18
}

const res = ages.filter(checkAdults)
console.log(res);

//..................

const words = [
    "spray",
    "limit",
    "elite",
    "exubergant",
    "destruction",
    "present",
    "daily",
    "freshnewmusic"
]

function lengthCheck(word){ //again using function for reusability.
    return word.length > 6
}

const lengthChecked = words.filter(lengthCheck)
console.log(lengthChecked);