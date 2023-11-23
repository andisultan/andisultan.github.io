// A closure in JavaScript is an inner function that has access to its outer function's scope, even after the outer function has returned control. A closure makes the variables of the inner function private

let counter = function() {
  let count = 0;
  return function() {
    return count++;
  };
}

let count = counter();
console.log(count()); // 0
console.log(count()); // 1