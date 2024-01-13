//JSON - Javascript Object Notation(used in transmitting data from server)

//JSON
const person = {
  userName: "hillsonmars",
  age: 23,
  email: "dhills@gmail.com",
  isSubscribed: true,
  hobbies: ["reading", "gym", "coding"],
  address: {
    city: "CDO",
  },
};

//JSON.stringify() -converts JS object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse()-revert back JSON string to JS Object

const parseObject = JSON.parse(jsonString);
console.log(parseObject);
