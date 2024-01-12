// methods of defining arrys

const a = ["apple", "mango", 48, true];
console.log(a);

const b = [];
b[0] = "car";
b[1] = "bike";
b[2] = "bus";

console.log(b);

const c = new Array("red", "green", "blue");

console.log(c);

// aceesing array elements
let a1 = a[2];
console.log(a1);

// changing an array elements
b[1] = "motor-bike";
console.log(b);

// measure length of arry
let a2 = a.length;
console.log(a2);

//conveting array (to string)
let c1 = c.toString();
console.log(c1);

// convertin arry to string using (join)
let c2 = c.join();
console.log(c2);

let c3 = c.join("$");
console.log(c3);

let c4 = c.join(" * ")
console.log(c4);

// pop & push array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("chiku");
console.log(fruits);

let fruits2 = fruits.push("nimbu");
console.log(fruits);
console.log(fruits2) // returning the length of arry.....!!!****(same as unshift)

fruits.pop();
console.log(fruits);

let fruits3 = fruits.pop();
console.log(fruits);
console.log(fruits3); // returning the poped element....!!!!*****(same as shift)



// Delete method in array  **** {delete krn se undefined kyu ho raha hai}-------
const d = ["Banana", "Orange", "Apple", "Mango"];
delete d[2];
console.log(d);


// concating arraaay  (adding)

let abc = a.concat(b,c);
console.log(abc);

abc = abc.concat("bhanu");
console.log(abc); // variable dena hoga


// falttering array
const myArr = [[1,2],[3,4],[5,6,[9,8]]];
const newArr = myArr.flat();
console.log(newArr);


// splice oi array

const splice1 = ["aman", "rahul", "ravi", "hariom","sunny"];
splice1.splice(1,3, "ram","shyam");
console.log(splice1);
splice1.splice(2,1);
console.log(splice1); //updating the exixting arry

// slice of array
const slice1 = ["aman", "rahul", "ravi", "hariom","sunny"];
const slice2 = slice1.slice(1, 4);
console.log(slice1);
console.log(slice2); // it returns new sliced array in new defined variable


// 


for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}