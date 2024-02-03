//every() method returns true if the callback function returns true
//for every element.
// const peoples = ["diss", 'vann', 'yshee']

// const everyRes = peoples.every(people => people.length === 4)
// console.log(everyRes);







//some() method tests whether at least one element in the array passes
//the condition specified by the provided callback function.

// const someRes = peoples.some(people => people.length === 4)
// console.log(someRes);


// const songs = [
//     { name: "Lucky You", duration: 4.34 },
//     { name: "Just Like You", duration: 3.23 },
//     { name: "The Search", duration: 2.33 },
//     { name: "Old Town Road", duration: 1.43 },
//     { name: "The Box", duration: 5.23 },
//   ];

//   const everySongDur = songs.every(song => song.duration > 3)
//   console.log(everySongDur);

//   const someSongDur = songs.some(song => song.duration > 3)
//   console.log(someSongDur);




  //CHALLENGE every() some()

  // REFACTOR -> USE EVERY & SOME HELPERS
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
  ];
  

  

  function allProductsBooksChecker(book) {
    return book.category === "Books"
  }

  function someProductsBooksChecker(book) {
    return book.category === "Books"
  }


  const allProductsBooks = products.every(allProductsBooksChecker)
  const someProductsBooks = products.some(someProductsBooksChecker)



  console.log(allProductsBooks);
  console.log(someProductsBooks);
