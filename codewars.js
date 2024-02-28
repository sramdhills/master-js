function shortenFullName(string){
    // your code here
    const stringArray = string.split(" ")
    const lastName = stringArray.pop() //should return the last element of stringArray
    let firstName = stringArray.slice(0, stringArray.length - 1)
    const firstNameIn = firstName.toString().slice(0,1)
    const prefixesMale = ["Mister", "Mr.", "Mr"]
    const prefixesFemm = ["Madame", "Mrs.", ""]
    const prefixesFem = ["Miss", "Ms.", "Ms"]
    
    if (string.includes(prefixesMale)) {
      firstName = stringArray.shift().slice(0, stringArray.length - 1)
      return `Mr ${firstNameIn} ${lastName}`
    }
  
  }