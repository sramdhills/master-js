//Rest Parameter syntax allows a function to accept an
//indefinite number of arguments or unlimited number of arguments


function user(another, ...userData) { //REST parameter 
    console.log(userData);
    console.log(another);

}
user("D Hills", 19, "programming", "badminton") //outputs an array.


function person(firstName, lastName, ...hobbies) {
    console.log(`First Name:`, firstName);
    console.log(`Last Name:`, lastName);
    console.log(`Hobbies:`, hobbies);
}
person("DAsInDiscipline", "Me", "badminton", "programming", "gym workout" )

//REST parameter
function rest(...unliParam) {
    console.log(unliParam);
}
rest(1,2,3,"hey","soul", "suster")