// function Definition
function calculateBill() {
  //this is the Function body
  console.log("Running Calculate Bill");
  const total = 100 * 1.13;
  return total;
}

//Function Call or ** Run **
const myTotal = calculateBill();
console.log("Your Total is $${myTotal}");

console.log("Your total is $${calculateBill()}");
