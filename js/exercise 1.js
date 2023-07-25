function fizzBuzz(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) { // a for loop stating the range of the array 'i'
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz"); //  push the string 'fizzbuzz' to the bottom of the stack when true after a loop
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString()); // convert 'i' to a string and push to bottom of stack
    }
  }
  return answer;
}


const n = 15; // as seen in example
const result = fizzBuzz(n);
console.log(result);
