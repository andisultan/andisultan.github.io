const exampleCurrying = (a) => (b) => (c) => a + b + c;

const test1 = exampleCurrying(1);
const test2 = test1(2);
const test3 = test2(3);
console.log(test3);
// 6
