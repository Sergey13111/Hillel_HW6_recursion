"use strict";

// 1
const sumTo= (n) => {
    if (n===1) 
    return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(4));
console.log(sumTo(3));

// 2
const sentance = "Lorem ipsum dolor sit amet";
const findShort = (str) => {
    return str.split(" ").reduce((a, b) => a.length <= b.length ? a : b)
}

console.log(findShort(sentance));
console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));