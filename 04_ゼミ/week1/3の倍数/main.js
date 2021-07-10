// const FizzBuzz = function (number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (n % 5 === 0) {
//       console.log("Buzz");
//     } else if (n % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(n);
//     }
//   }
// };
// FizzBuzz(100);

const threeGenki = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || Boolean(n.toString().match(/3/))) {
      //strに3を含む場合の処理
      console.log(`${n}!!!!!`)
    } else {
      console.log(n)
    }
  }
}
threeGenki(100)
