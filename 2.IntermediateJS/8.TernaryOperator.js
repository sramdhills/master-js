//Ternary Operator
//concise way of writinf a simple conditional expressions.

//condition ? exprIFTrue : exprIfFalse
let password = 2
function passwordChecker(ps) {
//     if (ps === 8) {
//         return `Strong password`
//     } else {
//         return `Password should be 8 characters`
//     }
// }
return ps ===8 ? `Strong Password` : `Password should be 8 characters`

}
const res = passwordChecker(8)
console.log(res);


const age = 15
const isAdult = age >= 18 ? `Adult` : `Not an Adult`
console.log(isAdult);

//CHALLENGE
const money = 0
const haveMoney = money > 0 ? `Buy Products` : `They should bring money`
console.log(haveMoney);

const personMoney = true
const ifMoney = money === true ? `Buy products dude` : `Bring your dough!`
console.log(ifMoney);