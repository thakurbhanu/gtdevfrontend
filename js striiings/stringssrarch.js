// index of

let a = "this is practice of javascript concept ICE practice detail";
let a1 = a.indexOf("practice");
console.log(a1);

// lastindex of

let a2 = a.lastIndexOf("practice");
console.log(a2);

// search

let a3 = a.search("practice");
console.log(a3);

// match

let a4 = a.match("ice");
console.log(a4);

let a5 = a.matchAll(/ice/gi);
console.log(a5);

let a6 = a.match(/ice/ig);
console.log(a6);

// include

let a7 = a.includes("javascript");
console.log(a7);

let a8 = a.includes("javascript", 20);
console.log(a8);

let a9 = a.includes("javascript", 30);
console.log(a9);

// startwith

let b1 = a.startsWith("practice");
console.log(b1);

let  b2 = a.startsWith("practice" , 8);
console.log(b2);

//endwith

let b3 = a.endsWith("detail");
console.log(b3);

let b4 = a.endsWith("concept",38);
console.log(b4);